import { Logger } from '@aws-lambda-powertools/logger'

/** @type {import('@aws-lambda-powertools/logger').Logger | null} */
let logger = null

/**
 * @returns {import('@aws-lambda-powertools/logger').Logger}
 */
function makeLogger() {
  return new Logger({
  })
}

/**
 * @returns {import('@aws-lambda-powertools/logger').Logger}
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

  logger.error('something went wrong', {
    message: 'something went wrong',
    errorType: 'Error',
    errorMessage: 'something went wrong',
    stack: []
  })

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
