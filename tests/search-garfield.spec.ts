import { test, expect, Page } from '@playwright/test';

test('search for "Garfield" movie', async ({ page }) => {
  // Step 1: Navigate to the movies app
  await page.goto('https://debs-obrien.github.io/playwright-movies-app');

  // Step 2: Search for 'Garfield'
  const searchInput = page.getByPlaceholder('Search for a movie...');
  await page.getByRole('banner').getByRole('search').click();
  await searchInput.click();
  await searchInput.fill('Garfield');
  await searchInput.press('Enter');

  // Step 3: Verify 'Garfield' appears in the movie list
  // Find the movie link for 'Garfield' and verify it exists
  const garfieldLink = page.getByRole('link', { name: /garfield/i });
  await expect(garfieldLink).toBeVisible();
});
