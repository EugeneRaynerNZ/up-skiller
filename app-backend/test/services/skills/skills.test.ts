// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import * as assert from 'assert'
import { app } from '../../../src/app'

describe('skills service', () => {
  it('registered the service', () => {
    const service = app.service('skills')

    assert.ok(service, 'Registered the service')
  })
})
