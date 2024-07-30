import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'
import type { Application } from './declarations'
import { MongoMemoryServer } from 'mongodb-memory-server'

declare module './declarations' {
  interface Configuration {
    mongodbClient: Promise<Db>
    mongoClient: MongoClient
  }
}

export const mongodb = async (app: Application) => {
  const mongoConfig = app.get('mongodb')
  if (process.env.NODE_ENV === 'test') {
    const mongod = await MongoMemoryServer.create()
    app.set('mongoServer', mongod)
    app.set(
      'mongodbClient',
      MongoClient.connect(mongod.getUri()).then((client) => {
        app.set('mongoClient', client)
        return client.db('testDb')
      }),
    )
    // memory store teardown
    process.on('exit', async () => {
      const client = app.get('mongoClient')
      const mongod = app.get('mongoServer')
      await client.close()
      if (mongod) {
        await mongod.stop()
      }
    })
  } else {
    const { url, dbName, authSource, username, password } = mongoConfig
    app.set(
      'mongodbClient',
      MongoClient.connect(
        `mongodb://${username}:${encodeURIComponent(password)}@${url}/${dbName}?authSource=${authSource}`,
      ).then((client) => client.db(dbName)),
    )
  }
}
