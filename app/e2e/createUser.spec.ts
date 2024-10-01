import { test, expect } from '@playwright/test'

test('Create a new cliente successfully', async ({ page }) => {
  await page.goto('/clients', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Criar cliente' }).click()

  await page.locator('input[name="name"]').fill('Frank Sinatra')
  await page.locator('input[name="salary"]').fill('320000')
  await page.locator('input[name="companyValuation"]').fill('10000000')

  await page.getByRole('button', { name: 'Criar cliente' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Cliente criado com sucesso')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
