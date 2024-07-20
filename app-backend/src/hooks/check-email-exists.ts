// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const checkEmailExists = async (context: HookContext) => {
  console.log(`Running hook check-email-exists on ${context.path}.${context.method}`)

  // get app and data from context
  const { app, data } = context
  const { email } = data

  // check if email provided
  if (!email) {
    throw new Error('Email not provided')
  }

  // check if email exists
  const users = await app.service('users').find({ query: { email } })
  if (users.total > 0) {
    throw new Error('Email already exists')
  }

  console.log('New email')

  return context
}
