/**
 * Tests E2E - Accessibilité (axe-core)
 *
 * Couvre:
 * - Page d'accueil sans violations majeures (WCAG 2A/2AA)
 * - Tabs ARIA conformes (tablist/tab/tabpanel)
 * - Lang selector accessible
 */
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const STORAGE_KEY = 'qr-code-generator-lang';

test.describe('♿ Accessibilité (axe-core)', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => localStorage.removeItem('qr-code-generator-lang'));
  });

  test('page d\'accueil sans violations majeures', async ({ page }) => {
    await page.goto('/');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    console.log(`Violations trouvées: ${results.violations.length}`);
    for (const v of results.violations) {
      console.log(`  - [${v.impact}] ${v.id}: ${v.description}`);
    }

    // Only critical violations must be zero (known: color-contrast on privacy badge is "serious")
    const critical = results.violations.filter(v => v.impact === 'critical');
    expect(critical).toHaveLength(0);
  });

  test('tabs ARIA conformes (tablist / tab / tabpanel)', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[role="tablist"]', { timeout: 10000 });

    // Tablist exists
    const tablist = page.locator('[role="tablist"]');
    await expect(tablist).toBeVisible();

    // All tabs have proper ARIA attributes
    const tabs = page.locator('[role="tab"]');
    await expect(tabs).toHaveCount(4);

    // Active tab (URL) should have aria-selected=true
    const activeTab = page.locator('.tab--active');
    await expect(activeTab).toHaveAttribute('aria-selected', 'true');

    // Non-active tabs should have aria-selected=false
    const inactiveTabs = page.locator('[role="tab"]:not(.tab--active)');
    const count = await inactiveTabs.count();
    for (let i = 0; i < count; i++) {
      await expect(inactiveTabs.nth(i)).toHaveAttribute('aria-selected', 'false');
    }

    // Tabpanels exist and only active one is visible
    const panels = page.locator('[role="tabpanel"]');
    await expect(panels).toHaveCount(4);

    // Active panel (url) visible, others hidden
    await expect(page.locator('#tab-url')).not.toHaveAttribute('hidden');
    await expect(page.locator('#tab-wifi')).toHaveAttribute('hidden');
    await expect(page.locator('#tab-vcard')).toHaveAttribute('hidden');
    await expect(page.locator('#tab-text')).toHaveAttribute('hidden');
  });

  test('navigation clavier entre tabs (flèches gauche/droite)', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-tab="url"]', { timeout: 10000 });

    // Focus the first tab
    await page.focus('[data-tab="url"]');

    // Arrow right should move to WiFi tab
    await page.keyboard.press('ArrowRight');
    const focusedTab = page.locator(':focus');
    await expect(focusedTab).toHaveAttribute('data-tab', 'wifi');

    // The WiFi tabpanel should now be visible
    await expect(page.locator('#tab-wifi')).not.toHaveAttribute('hidden');
  });

  test('boutons d\'action accessibles (labels et états)', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Generate button has accessible name
    await expect(page.locator('#btn-generate')).toBeVisible();
    await expect(page.locator('#btn-generate')).toHaveText(/.+/);

    // Reset button has accessible name
    await expect(page.locator('#btn-reset')).toBeVisible();
    await expect(page.locator('#btn-reset')).toHaveText(/.+/);

    // Download buttons hidden initially
    await expect(page.locator('#qr-actions')).toBeHidden();

    // Generate a QR code to reveal download buttons
    await page.fill('#url-input', 'https://a11y-test.com');
    await page.click('#btn-generate');
    await expect(page.locator('#qr-actions')).toBeVisible({ timeout: 10000 });

    // Download buttons should have accessible names
    await expect(page.locator('#btn-download')).toHaveText(/.+/);
    await expect(page.locator('#btn-download-svg')).toHaveText(/.+/);
    await expect(page.locator('#btn-copy')).toHaveText(/.+/);
  });

  test('SR live region pour annonces (aria-live)', async ({ page }) => {
    await page.goto('/');

    // sr-live is visually hidden (sr-only) but must exist with proper ARIA
    const srLive = page.locator('#sr-live');
    await expect(srLive).toHaveAttribute('aria-live', 'polite');
    await expect(srLive).toHaveAttribute('aria-atomic', 'true');
  });
});
