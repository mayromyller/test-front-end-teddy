import { test, expect } from '@playwright/test'

test('Show welcome page and start session successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Entrar' }).click()

  const errorMessage = page.getByText('Por favor digite seu nome')
  expect(errorMessage).toBeVisible()

  await page.getByPlaceholder('Digite o seu nome:').fill('Jhon Doe')

  await page.getByRole('button', { name: 'Entrar' }).click()

  await page.goto('/clients', { waitUntil: 'networkidle' })

  const userName = page.getByText('Olá, Jhon Doe')

  expect(userName).toBeVisible()
})
