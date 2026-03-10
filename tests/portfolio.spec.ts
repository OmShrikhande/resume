import { test, expect } from '@playwright/test';

test.describe('Devashish Pillay Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section renders correctly with new role', async ({ page }) => {
    // Check main headline
    const h1 = page.locator('h1');
    await expect(h1).toContainText('Architecting');
    await expect(h1).toContainText('The Future');

    // Check professional status badge
    const roleBadge = page.getByText(/Software Developer @ Planitt Solutions/i);
    await expect(roleBadge).toBeVisible();

    // Check profile image
    const profileImg = page.locator('img[alt="Devashish Pillay"]');
    await expect(profileImg).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    const html = page.locator('html');
    const toggleButton = page.getByLabel('Toggle theme');
    
    // Initial state might be system-dependent, so check both
    const initialTheme = await html.getAttribute('class');
    const isDark = initialTheme?.includes('dark');
    
    await toggleButton.click();
    
    // Check if theme flipped
    if (isDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }
  });

  test('navigation works', async ({ page }) => {
    const sections = ['projects', 'experience', 'skills'];
    for (const section of sections) {
      const link = page.locator(`nav a[href="#${section}"]`);
      await expect(link).toBeVisible();
      await link.click();
      
      const target = page.locator(`#${section}`);
      await expect(target).toBeInViewport();
    }
  });

  test('experience section contains Planitt Solutions', async ({ page }) => {
    const planittExp = page.getByText(/Planitt Solutions Pvt. Ltd./i);
    await expect(planittExp).toBeVisible();
  });
});
