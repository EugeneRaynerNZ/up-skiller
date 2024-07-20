// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  topicsDataValidator,
  topicsPatchValidator,
  topicsQueryValidator,
  topicsResolver,
  topicsExternalResolver,
  topicsDataResolver,
  topicsPatchResolver,
  topicsQueryResolver
} from './topics.schema'

import type { Application } from '../../declarations'
import { TopicsService, getOptions } from './topics.class'

export const topicsPath = 'topics'
export const topicsMethods: Array<keyof TopicsService> = ['find', 'get', 'create', 'patch', 'remove']

export * from './topics.class'
export * from './topics.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const topics = (app: Application) => {
  // Register our service on the Feathers application
  app.use(topicsPath, new TopicsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: topicsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(topicsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(topicsExternalResolver),
        schemaHooks.resolveResult(topicsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(topicsQueryValidator), schemaHooks.resolveQuery(topicsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(topicsDataValidator), schemaHooks.resolveData(topicsDataResolver)],
      patch: [schemaHooks.validateData(topicsPatchValidator), schemaHooks.resolveData(topicsPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [topicsPath]: TopicsService
  }
}
