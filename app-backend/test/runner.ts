// @ts-ignore
import Mocha from 'mocha'
import { glob } from 'glob'
import { app } from '../src/app'
import * as path from 'node:path'

async function runTests() {
  await app.setup()
  await app.listen(app.get('port'))
  await new Promise((r) => setTimeout(r, 5000))
  const mocha = new Mocha()

  const testDir = path.join(__dirname, '.')
  const files = glob.sync(`${testDir}/**/*.{test.ts,helper.ts}`)

  files.forEach((file) => {
    mocha.addFile(file)
  })

  try {
    await new Promise<void>((resolve, reject) => {
      mocha.run((failures) => {
        if (failures) reject(new Error(`${failures} tests failed.`))
        else resolve()
      })
    })
  } finally {
    await app.teardown()
  }
}

runTests()
  .catch((error) => console.error(error))
  .finally(() => process.exit(1))
