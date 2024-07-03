// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'
import type { Application } from './declarations'

declare module './declarations' {
  interface Configuration {
    mongodbClient: Promise<Db>
  }
}

export const mongodb = async (app: Application) => {
  const mongoConfig = app.get('mongodb')
  const { url, dbName, authSource, username, password } = mongoConfig
  const uri = `mongodb://${username}:${encodeURIComponent(password)}@${url}/${dbName}?authSource=${authSource}`
  const mongoClient = MongoClient.connect(uri).then((client) =>
    client.db(dbName),
  )
  app.set('mongodbClient', mongoClient)
}
