import { app } from './app'
import { logger } from './logger'

const port = app.get('port')
const host = app.get('host')

process.on('unhandledRejection', (reason) =>
  logger.error('Unhandled Rejection %O', reason),
)

// Wait for app to be fully configured before listening
app
  .setup()
  .then(() => {
    app.listen(port).then(() => {
      logger.info(`Feathers app listening on http://${host}:${port}`)
    })
  })
  .catch((error: Error) => {
    logger.error('Failed to start app:', error)
    process.exit(1)
  })
