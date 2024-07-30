// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import * as assert from 'assert'
import { app } from '../../../src/app'

describe('subjects service', () => {
  it('registered the service', () => {
    const service = app.service('subjects')

    assert.ok(service, 'Registered the service')
  })
})
