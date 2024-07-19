// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators'
import { SkillStatusEnum } from '../enum'

import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
import type { SubjectsService } from './subjects.class'

// Main data model schema
export const subjectsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),  // Subject id
    skillId: ObjectIdSchema(),  // Skill id
    name: Type.String(),  // Subject name
    description: Type.Optional(Type.String()), // Subject description
    tags: Type.Optional(Type.Array(Type.String())), // Subject tags
    status: SkillStatusEnum,  // Subject status
    topics: Type.Optional(Type.Array(ObjectIdSchema())),  // Topic ids under this subject
  },
  { $id: 'Subjects', additionalProperties: false }
)
export type Subjects = Static<typeof subjectsSchema>
export const subjectsValidator = getValidator(subjectsSchema, dataValidator)
export const subjectsResolver = resolve<Subjects, HookContext<SubjectsService>>({})

export const subjectsExternalResolver = resolve<Subjects, HookContext<SubjectsService>>({})

// Schema for creating new entries
export const subjectsDataSchema = Type.Pick(subjectsSchema,
   ['skillId', 'name', 'status'], 
  {
  $id: 'SubjectsData'
})
export type SubjectsData = Static<typeof subjectsDataSchema>
export const subjectsDataValidator = getValidator(subjectsDataSchema, dataValidator)
export const subjectsDataResolver = resolve<Subjects, HookContext<SubjectsService>>({
  // give status a default value
  status: () => SkillStatusEnum.ACTIVE,
})

// Schema for updating existing entries
export const subjectsPatchSchema = Type.Partial(subjectsSchema, {
  $id: 'SubjectsPatch'
})
export type SubjectsPatch = Static<typeof subjectsPatchSchema>
export const subjectsPatchValidator = getValidator(subjectsPatchSchema, dataValidator)
export const subjectsPatchResolver = resolve<Subjects, HookContext<SubjectsService>>({})

// Schema for allowed query properties
export const subjectsQueryProperties = Type.Pick(subjectsSchema, ['_id', 'skillId', 'name'])
export const subjectsQuerySchema = Type.Intersect(
  [
    querySyntax(subjectsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type SubjectsQuery = Static<typeof subjectsQuerySchema>
export const subjectsQueryValidator = getValidator(subjectsQuerySchema, queryValidator)
export const subjectsQueryResolver = resolve<SubjectsQuery, HookContext<SubjectsService>>({})
