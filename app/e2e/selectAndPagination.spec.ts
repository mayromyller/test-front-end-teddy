import { test, expect } from '@playwright/test'

test('Select and pagination functionality', async ({ page }) => {
  await page.goto('/clients', { waitUntil: 'networkidle' })

  const cards = await page.locator('[data-testid^="client-card-"]').count()

  const select = page.getByRole('combobox')
  expect(select).toBeVisible()

  if (cards >= 3) {
    select.click()

    await page.getByLabel('2', { exact: true }).click()

    expect(page.getByLabel('pagination').getByText('2')).toBeVisible()
  }

  await page.waitForTimeout(1000)

  if (cards < 10) {
    select.click()

    await page.getByLabel('10', { exact: true }).click()

    expect(page.getByLabel('pagination').getByText('2')).not.toBeVisible()
  }

  await page.waitForTimeout(1000)
})
