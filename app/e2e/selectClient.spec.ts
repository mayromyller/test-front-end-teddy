import { test, expect } from '@playwright/test'

test('Select a client successfully', async ({ page }) => {
  await page.goto('/clients', { waitUntil: 'networkidle' })

  const cards = await page.locator('[data-testid^="client-card-"]').count()

  const noHaveClients = page.getByText('Não há clientes selecionados')

  if (cards >= 1) {
    const firstCard = page.locator('[data-testid^="client-card-"]').first()

    firstCard.getByRole('button').first().click()

    const toast = page.getByRole('status')

    expect(toast).toBeVisible()

    await page.waitForTimeout(1000)

    await page.getByRole('link', { name: 'Clientes selecionados' }).click()

    await page.goto('/selected-clients', { waitUntil: 'networkidle' })

    const selectedClients = page.getByRole('heading', {
      name: 'Clientes selecionados:'
    })

    const clientSelected = await page
      .locator('[data-testid^="client-card-"]')
      .count()
    expect(selectedClients).toBeVisible()

    expect(clientSelected).toBe(1)

    await page.waitForTimeout(1000)

    const clearButton = page.getByRole('button', {
      name: 'Limpar clientes selecionados'
    })

    clearButton.click()

    expect(noHaveClients).toBeVisible()

    await page.waitForTimeout(1000)
  }

  if (cards < 1) {
    expect(noHaveClients).toBeVisible()
  }
})
