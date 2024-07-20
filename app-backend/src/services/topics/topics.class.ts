// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Topics, TopicsData, TopicsPatch, TopicsQuery } from './topics.schema'

export type { Topics, TopicsData, TopicsPatch, TopicsQuery }

export interface TopicsParams extends MongoDBAdapterParams<TopicsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class TopicsService<ServiceParams extends Params = TopicsParams> extends MongoDBService<
  Topics,
  TopicsData,
  TopicsParams,
  TopicsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('topics'))
  }
}
