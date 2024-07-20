// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import {
  Type,
  getValidator,
  querySyntax,
  ObjectIdSchema,
} from '@feathersjs/typebox'
import { resolve } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators'
import { SkillStatusEnum } from '../enum'

import type { HookContext } from '../../declarations'
import type { TasksService } from './tasks.class'
import type { Static } from '@feathersjs/typebox'

// Main data model schema
export const tasksSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    topicId: ObjectIdSchema(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    tags: Type.Optional(Type.Array(Type.String())),
    status: SkillStatusEnum,
    priority: Type.Optional(Type.Number()), // Task priority: 1-3
    /**
     * Question: What is the difference between `dueDate` and `completedAt`?
     * Error: strict mode: unknown keyword: "instanceOf"
     */
    completedAt: Type.Optional(Type.String()), // Task completion date
  },
  { $id: 'Tasks', additionalProperties: false },
)
export type Tasks = Static<typeof tasksSchema>
export const tasksValidator = getValidator(tasksSchema, dataValidator)
export const tasksResolver = resolve<Tasks, HookContext<TasksService>>({})
export const tasksExternalResolver = resolve<Tasks, HookContext<TasksService>>(
  {},
)

// Schema for creating new entries
export const tasksDataSchema = Type.Pick(tasksSchema, ['topicId', 'name','status'], {
  $id: 'TasksData',
})
export type TasksData = Static<typeof tasksDataSchema>
export const tasksDataValidator = getValidator(tasksDataSchema, dataValidator)
export const tasksDataResolver = resolve<Tasks, HookContext<TasksService>>({
  // give status a default value
  status: () => SkillStatusEnum.ACTIVE,
})

// Schema for updating existing entries
export const tasksPatchSchema = Type.Partial(tasksSchema, {
  $id: 'TasksPatch',
})
export type TasksPatch = Static<typeof tasksPatchSchema>
export const tasksPatchValidator = getValidator(tasksPatchSchema, dataValidator)
export const tasksPatchResolver = resolve<Tasks, HookContext<TasksService>>({})

// Schema for allowed query properties
export const tasksQueryProperties = Type.Pick(tasksSchema, ['_id', 'topicId', 'name'])
export const tasksQuerySchema = Type.Intersect(
  [
    querySyntax(tasksQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
)
export type TasksQuery = Static<typeof tasksQuerySchema>
export const tasksQueryValidator = getValidator(
  tasksQuerySchema,
  queryValidator,
)
export const tasksQueryResolver = resolve<
  TasksQuery,
  HookContext<TasksService>
>({})
