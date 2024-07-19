// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  subjectsDataValidator,
  subjectsPatchValidator,
  subjectsQueryValidator,
  subjectsResolver,
  subjectsExternalResolver,
  subjectsDataResolver,
  subjectsPatchResolver,
  subjectsQueryResolver
} from './subjects.schema'

import type { Application } from '../../declarations'
import { SubjectsService, getOptions } from './subjects.class'

export const subjectsPath = 'subjects'
export const subjectsMethods: Array<keyof SubjectsService> = ['find', 'get', 'create', 'patch', 'remove']

export * from './subjects.class'
export * from './subjects.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const subjects = (app: Application) => {
  // Register our service on the Feathers application
  app.use(subjectsPath, new SubjectsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: subjectsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(subjectsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(subjectsExternalResolver),
        schemaHooks.resolveResult(subjectsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(subjectsQueryValidator),
        schemaHooks.resolveQuery(subjectsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(subjectsDataValidator),
        schemaHooks.resolveData(subjectsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(subjectsPatchValidator),
        schemaHooks.resolveData(subjectsPatchResolver)
      ],
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
    [subjectsPath]: SubjectsService
  }
}
