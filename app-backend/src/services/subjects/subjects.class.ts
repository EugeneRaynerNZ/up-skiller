// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Subjects, SubjectsData, SubjectsPatch, SubjectsQuery } from './subjects.schema'

export type { Subjects, SubjectsData, SubjectsPatch, SubjectsQuery }

export interface SubjectsParams extends MongoDBAdapterParams<SubjectsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class SubjectsService<ServiceParams extends Params = SubjectsParams> extends MongoDBService<
  Subjects,
  SubjectsData,
  SubjectsParams,
  SubjectsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('subjects'))
  }
}
