// import { Logger, createLogger } from '@aws-lambda-powertools/logger'
import { Console } from 'console'

/** @type {Console} */
let logger = null

/**
 * @returns {Console}
 */
function makeLogger() {
  return new Console({
    stdout: process.stdout,
    stderr: process.stderr,

  })
}

/**
 * @returns {Console}
 */
function getLogger() {
  if (logger === null) logger = makeLogger()
  return logger
}

/**
 * @param {import("aws-lambda").APIGatewayProxyEventV2} event
 * @returns {import("aws-lambda").APIGatewayProxyResultV2}
 */
export async function handler(event) {
  const logger = getLogger()

  logger.error('something went wrong')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Hello!"
    })
  }
}
