import { PUBLIC_CALCULATOR_API_ENDPOINT } from "$env/static/public"

export async function sum(operands: number[]): Promise<number> {
  const response = await fetch(`${PUBLIC_CALCULATOR_API_ENDPOINT}/sum`, {
    method: "POST",
    body: JSON.stringify(operands)
  })
  const { result } = await response.json()
  return result
}
