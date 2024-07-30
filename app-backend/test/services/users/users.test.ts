// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import * as assert from 'assert'
import { app } from '../../../src/app'
import { setupTestEnvironment } from '../../helpers/users.helper'
import { code, get } from '../../helpers/query.helper'

describe('users service', () => {
  let authedUser: any, otherUsers: any, accessToken: string
  before(async () => {
    const { user, users, accessToken: token } = await setupTestEnvironment(app)
    authedUser = user
    otherUsers = users
    accessToken = token
  })

  it('registered the service', () => {
    const service = app.service('users')
    assert.ok(service, 'Registered the service')
  })

  it('should not allow anyone to get or find any user', async () => {
    assert.ok(await code(401, ['get', 'users', authedUser._id]))
    assert.ok(await code(401, ['find', 'users', {}]))
    assert.ok(await code(200, ['get', 'users', authedUser._id, accessToken]))
    assert.ok(await code(200, ['find', 'users', {}, accessToken]))
  })

  it('hashed the password', async () => {
    const { data } = await get(['users', authedUser._id, accessToken])
    assert.notEqual(data.password, authedUser.password)
  })

  it('prevents users to see other users', async () => {

    const { data } = await get(['users', otherUsers[0]._id, accessToken])
    assert.equal(data._id.toString(), authedUser._id.toString())
  })
})
