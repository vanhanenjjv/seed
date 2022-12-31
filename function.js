/**
 * @param {import("aws-lambda").APIGatewayProxyEventV2} event
 * @returns {import("aws-lambda").APIGatewayProxyResultV2}
 */
export function handler(event) {
  return {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: "Hello!"
    })
  }
}
