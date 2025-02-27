import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://Youtube.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('YouTube');
});

test('get started link', async ({ page }) => {
  await page.goto('https://Youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click({clickCount: 2});
  
 
});
