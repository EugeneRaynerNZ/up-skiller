// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import {
  Type,
  getValidator,
  querySyntax,
  ObjectIdSchema,
} from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators'
import { SkillStatusEnum } from '../enum'

import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
import type { TopicsService } from './topics.class'

// Main data model schema
export const topicsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    subjectId: ObjectIdSchema(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    tags: Type.Optional(Type.Array(Type.String())),
    status: SkillStatusEnum,
    tasks: Type.Optional(Type.Array(ObjectIdSchema())),
  },
  { $id: 'Topics', additionalProperties: false },
)
export type Topics = Static<typeof topicsSchema>
export const topicsValidator = getValidator(topicsSchema, dataValidator)
export const topicsResolver = resolve<Topics, HookContext<TopicsService>>({})

export const topicsExternalResolver = resolve<
  Topics,
  HookContext<TopicsService>
>({})

// Schema for creating new entries
export const topicsDataSchema = Type.Pick(
  topicsSchema,
  ['subjectId', 'name', 'status'],
  {
    $id: 'TopicsData',
  },
)
export type TopicsData = Static<typeof topicsDataSchema>
export const topicsDataValidator = getValidator(topicsDataSchema, dataValidator)
export const topicsDataResolver = resolve<Topics, HookContext<TopicsService>>({
  // give status a default value
  status: () => SkillStatusEnum.ACTIVE,
})

// Schema for updating existing entries
export const topicsPatchSchema = Type.Partial(topicsSchema, {
  $id: 'TopicsPatch',
})
export type TopicsPatch = Static<typeof topicsPatchSchema>
export const topicsPatchValidator = getValidator(
  topicsPatchSchema,
  dataValidator,
)
export const topicsPatchResolver = resolve<Topics, HookContext<TopicsService>>(
  {},
)

// Schema for allowed query properties
export const topicsQueryProperties = Type.Pick(topicsSchema, [
  '_id',
  'subjectId',
  'name',
])
export const topicsQuerySchema = Type.Intersect(
  [
    querySyntax(topicsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
)
export type TopicsQuery = Static<typeof topicsQuerySchema>
export const topicsQueryValidator = getValidator(
  topicsQuerySchema,
  queryValidator,
)
export const topicsQueryResolver = resolve<
  TopicsQuery,
  HookContext<TopicsService>
>({})
