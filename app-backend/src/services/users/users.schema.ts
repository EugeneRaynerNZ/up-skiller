import {
  Type,
  getValidator,
  querySyntax,
  ObjectIdSchema,
} from '@feathersjs/typebox'
import { resolve } from '@feathersjs/schema'
import { passwordHash } from '@feathersjs/authentication-local'
import { dataValidator, queryValidator } from '../../validators'

import type { HookContext } from '../../declarations'
import type { UserService } from './users.class'
import type { Static } from '@feathersjs/typebox'

// Main data model schema
export const usersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    email: Type.String(),
    password: Type.String(),
    username: Type.String(),
    firstname: Type.Optional(Type.String()),
    lastname: Type.Optional(Type.String()),
    middlename: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    role: Type.String(),
    skills: Type.Array(ObjectIdSchema()),
    authProviders: Type.Optional(
      Type.Array(
        Type.Object({
          provider: Type.String(),
          providerId: Type.String(),
          providerToken: Type.String(),
        }),
      ),
    ),
  },
  { $id: 'Users', timestamps: true, additionalProperties: true },
)
export type Users = Static<typeof usersSchema>
export const usersValidator = getValidator(usersSchema, dataValidator)
export const usersResolver = resolve<Users, HookContext<UserService>>({})
export const usersExternalResolver = resolve<Users, HookContext<UserService>>({
  // do not expose password
  // password: () => undefined,
})

// Schema for creating new entries
export const usersDataSchema = Type.Pick(
  usersSchema,
  ['email', 'password', 'username', 'role'],
  {
    $id: 'UsersData',
  },
)
export type UsersData = Static<typeof usersDataSchema>
export const usersDataValidator = getValidator(usersDataSchema, dataValidator)
export const usersDataResolver = resolve<Users, HookContext<UserService>>({
  // hash password
  password: passwordHash({ strategy: 'local' }),
})

// Schema for updating existing entries
export const usersPatchSchema = Type.Partial(usersSchema, {
  $id: 'UsersPatch',
})
export type UsersPatch = Static<typeof usersPatchSchema>
export const usersPatchValidator = getValidator(usersPatchSchema, dataValidator)
export const usersPatchResolver = resolve<Users, HookContext<UserService>>({
  password: passwordHash({ strategy: 'local' }),
})

// Schema for allowed query properties
export const usersQueryProperties = Type.Pick(usersSchema, [
  '_id',
  'email',
  'username',
  'phone'
])
export const usersQuerySchema = Type.Intersect(
  [
    querySyntax(usersQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false }),
  ],
  { additionalProperties: false },
)
export type UsersQuery = Static<typeof usersQuerySchema>
export const usersQueryValidator = getValidator(
  usersQuerySchema,
  queryValidator,
)
export const usersQueryResolver = resolve<UsersQuery, HookContext<UserService>>(
  {
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    _id: async (value, user, context) => {
      // We want to be able to get a list of all users but
      // only let a user modify their own data otherwise
      if (context.params.user && context.method !== 'find') {
        return context.params.user._id
      }

      return value
    },
  },
)
