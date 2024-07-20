import { tasks } from './tasks/tasks'
import { topics } from './topics/topics'
import { subjects } from './subjects/subjects'
import { skills } from './skills/skills'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  // All services will be registered here
  app.configure(user)
  app.configure(skills)
  app.configure(subjects)
  app.configure(topics)
  app.configure(tasks)
}
