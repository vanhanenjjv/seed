import { expect, test } from '@playwright/test'

test.describe('Calculator', () => {
  test('should sum two numbers', async ({ page }) => {
    await page.goto('/')
    await page.fill('data-test-id=input', '1 2')
    await Promise.all([
      page.waitForResponse(response => response.url().endsWith('/sum')),
      page.click('data-test-id=calculate'),
    ])
    // NOTE: is there a race condition of not waiting for the SPA to update?
    const product = await page.locator('data-test-id=product').inputValue()
    expect(product).toEqual('4')
  })
})
