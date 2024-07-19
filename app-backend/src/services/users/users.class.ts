// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type {
  MongoDBAdapterParams,
  MongoDBAdapterOptions,
} from '@feathersjs/mongodb'

import type { Application } from '../../declarations'

import type { Users, UsersData, UsersPatch, UsersQuery } from './users.schema'

export type { Users, UsersData, UsersPatch, UsersQuery }

export interface UserParams extends MongoDBAdapterParams<UsersQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class UserService<
  ServiceParams extends Params = UserParams,
> extends MongoDBService<Users, UsersData, UserParams, UsersPatch> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('users')),
  }
}
