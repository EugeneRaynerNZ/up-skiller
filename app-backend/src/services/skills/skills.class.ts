// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Skills, SkillsData, SkillsPatch, SkillsQuery } from './skills.schema'

export type { Skills, SkillsData, SkillsPatch, SkillsQuery }

export interface SkillsParams extends MongoDBAdapterParams<SkillsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class SkillsService<ServiceParams extends Params = SkillsParams> extends MongoDBService<
  Skills,
  SkillsData,
  SkillsParams,
  SkillsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('skills'))
  }
}
