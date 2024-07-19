// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax, ObjectIdSchema } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators'
import { UserStatusEnum } from '../enum'

import type { Static } from '@feathersjs/typebox'
import type { HookContext } from '../../declarations'
import type { SkillsService } from './skills.class'

// Main data model schema
export const skillsSchema = Type.Object(
  {
    _id: ObjectIdSchema(),  // skill id
    userId: ObjectIdSchema(), // user id
    name: Type.String(),  // skill name
    description: Type.Optional(Type.String()), // skill description
    tags: Type.Optional(Type.Array(Type.String())),  // skill tags
    status: UserStatusEnum, // skill status
    subjects: Type.Optional(Type.Array(ObjectIdSchema())), // subject ids under this skill
  },
  { $id: 'Skills', additionalProperties: false }
)
export type Skills = Static<typeof skillsSchema>
export const skillsValidator = getValidator(skillsSchema, dataValidator)
export const skillsResolver = resolve<Skills, HookContext<SkillsService>>({})

export const skillsExternalResolver = resolve<Skills, HookContext<SkillsService>>({})

// Schema for creating new entries
export const skillsDataSchema = Type.Pick(skillsSchema, 
  ['userId', 'name', 'status'],
{
  $id: 'SkillsData'
})
export type SkillsData = Static<typeof skillsDataSchema>
export const skillsDataValidator = getValidator(skillsDataSchema, dataValidator)
export const skillsDataResolver = resolve<Skills, HookContext<SkillsService>>({
    // give status a default value
    status: () => UserStatusEnum.PENDING,
})

// Schema for updating existing entries
export const skillsPatchSchema = Type.Partial(skillsSchema, {
  $id: 'SkillsPatch'
})
export type SkillsPatch = Static<typeof skillsPatchSchema>
export const skillsPatchValidator = getValidator(skillsPatchSchema, dataValidator)
export const skillsPatchResolver = resolve<Skills, HookContext<SkillsService>>({})

// Schema for allowed query properties
export const skillsQueryProperties = Type.Pick(
  skillsSchema, 
  ['_id', 'userId', 'name'],
)
export const skillsQuerySchema = Type.Intersect(
  [
    querySyntax(skillsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type SkillsQuery = Static<typeof skillsQuerySchema>
export const skillsQueryValidator = getValidator(skillsQuerySchema, queryValidator)
export const skillsQueryResolver = resolve<SkillsQuery, HookContext<SkillsService>>({})
