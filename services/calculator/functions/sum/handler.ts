import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

function parseOperands(body?: string): number[] | null {
  if (!body) return null
  try { return JSON.parse(body) } 
  catch (e) { return null }
}

const reducer = (total: number, value: number) => total + value

const handler: APIGatewayProxyHandlerV2 = async event => {
  const operands = parseOperands(event.body)
  
  if (!operands) return { 
    statusCode: 400, 
    body: JSON.stringify({ error: "Invalid input" }) 
  }

  const product = operands.reduce(reducer)

  return { 
    statusCode: 200, 
    body: JSON.stringify({ product }) 
  }
}

export default handler
