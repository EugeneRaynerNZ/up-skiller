// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  skillsDataValidator,
  skillsPatchValidator,
  skillsQueryValidator,
  skillsResolver,
  skillsExternalResolver,
  skillsDataResolver,
  skillsPatchResolver,
  skillsQueryResolver
} from './skills.schema'

import type { Application } from '../../declarations'
import { SkillsService, getOptions } from './skills.class'

export const skillsPath = 'skills'
export const skillsMethods: Array<keyof SkillsService> = ['find', 'get', 'create', 'patch', 'remove']

export * from './skills.class'
export * from './skills.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const skills = (app: Application) => {
  // Register our service on the Feathers application
  app.use(skillsPath, new SkillsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: skillsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(skillsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(skillsExternalResolver),
        schemaHooks.resolveResult(skillsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(skillsQueryValidator), schemaHooks.resolveQuery(skillsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(skillsDataValidator), schemaHooks.resolveData(skillsDataResolver)],
      patch: [schemaHooks.validateData(skillsPatchValidator), schemaHooks.resolveData(skillsPatchResolver)],
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
    [skillsPath]: SkillsService
  }
}
