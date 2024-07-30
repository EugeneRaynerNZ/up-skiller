import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler,
} from '@feathersjs/express'
import configuration from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'

import type { Application } from './declarations'

import { logger } from './logger'
import { logError } from './hooks/log-error'
import { mongodb } from './mongodb'
import { authentication } from './authentication'
import { services } from './services'
import { channels } from './channels'

async function configureApp(app: Application) {
  // Load app configuration
  app.configure(configuration())
  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: true }))
  // Host the public folder
  app.use('/', serveStatic(app.get('public')))

  // Configure services and real-time functionality
  app.configure(rest())
  app.configure(
    socketio({
      cors: {
        origin: app.get('origins'),
      },
    }),
  )

  // Wait for MongoDB configuration to complete
  app.configure(mongodb)

  // have to manually wait for memory store to be ready when testing
  if (process.env.NODE_ENV === 'test')
    await new Promise((r) => setTimeout(r, 5000))

  // Configure authentication and services after MongoDB is ready
  app.configure(authentication)
  app.configure(services)
  app.configure(channels)

  // Configure a middleware for 404s and the error handler
  app.use(notFound())
  app.use(errorHandler({ logger }))

  // Register hooks that run on all service methods
  app.hooks({
    around: {
      all: [logError],
    },
    before: {},
    after: {},
    error: {},
  })

  // Register application setup and teardown hooks here
  app.hooks({
    setup: [],
    teardown: [],
  })
}

const app: Application = express(feathers())
configureApp(app).catch((error) => {
  console.error('Failed to configure app:', error)
  process.exit(1)
})

export { app }
