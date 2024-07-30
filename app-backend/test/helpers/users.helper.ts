import type { Application } from '../../src/declarations'

async function addUsersData(app: Application) {
  return [
    await app.service('users').create({
      password: 'password1234',
      email: 'test2@example.com',
      username: 'test2',
    }),
    await app.service('users').create({
      password: 'password12345',
      email: 'test3@example.com',
      username: 'test3',
    }),
  ]
}

async function createTestUser(app: Application) {
  const user = {
    password: 'password123',
    email: 'test@example.com',
    username: 'test',
  }
  return {
    ...(await app.service('users').create(user)),
    password: user.password,
  }
}

async function authenticateUser(app: any, user: any) {
  const authService = app.service('authentication')
  const { accessToken } = await authService.create(
    {
      strategy: 'local',
      email: user.email,
      password: user.password,
    },
    {},
  )
  return accessToken
}

export async function setupTestEnvironment(app: Application) {
  const user = await createTestUser(app)
  const accessToken = await authenticateUser(app, user)
  const users = await addUsersData(app)
  return { user, accessToken, users }
}
