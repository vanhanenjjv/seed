/**
 * @param {import("aws-lambda").APIGatewayProxyEventV2} event
 * @returns {import("aws-lambda").APIGatewayProxyResultV2}
 */
export async function handler(event) {
  console.error('something went wrong')

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
