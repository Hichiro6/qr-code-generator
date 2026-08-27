/**
 * Tests E2E - Génération de QR Code et Téléchargement
 *
 * Couvre:
 * - Génération QR Code URL → canvas visible
 * - Génération QR Code WiFi → canvas visible
 * - Téléchargement PNG → fichier généré
 * - Téléchargement SVG → fichier SVG valide
 */
import { test, expect } from '@playwright/test';

const STORAGE_KEY = 'qr-code-generator-lang';

test.describe('🔳 Génération et Téléchargement QR Code', () => {
  test.beforeEach(async ({ page }) => {
    // Clear language storage to avoid locale persistence
    await page.addInitScript(() => localStorage.removeItem('qr-code-generator-lang'));
  });

  test('Génération QR Code URL → canvas visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Fill URL input
    await page.fill('#url-input', 'https://example.com');

    // Click generate
    await page.click('#btn-generate');

    // QR preview canvas should appear
    await expect(page.locator('#qr-preview canvas')).toBeVisible({ timeout: 10000 });
    const canvas = page.locator('#qr-preview canvas');
    await expect(canvas).toHaveAttribute('role', 'img');
    await expect(canvas).toHaveAttribute('aria-label', 'Generated QR code');

    // Verify canvas has dimensions
    const width = await canvas.evaluate(el => el.width);
    const height = await canvas.evaluate(el => el.height);
    expect(width).toBeGreaterThan(0);
    expect(height).toBeGreaterThan(0);

    // Download buttons should become visible
    await expect(page.locator('#qr-actions')).toBeVisible();
    await expect(page.locator('#btn-download')).toBeVisible();
  });

  test('Génération QR Code WiFi → canvas visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-tab="wifi"]', { timeout: 10000 });

    // Switch to WiFi tab
    await page.click('[data-tab="wifi"]');
    await expect(page.locator('#tab-wifi')).not.toHaveAttribute('hidden');

    // Fill WiFi fields
    await page.fill('#wifi-ssid', 'MyNetwork');
    await page.fill('#wifi-password', 'secretpass');

    // Generate
    await page.click('#btn-generate');

    // Canvas should be visible
    await expect(page.locator('#qr-preview canvas')).toBeVisible({ timeout: 10000 });
  });

  test('Téléchargement PNG → fichier téléchargé', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Generate a QR code first
    await page.fill('#url-input', 'https://download-test.com');
    await page.click('#btn-generate');
    await expect(page.locator('#qr-preview canvas')).toBeVisible({ timeout: 10000 });

    // Click download and wait for the download event
    const downloadPromise = page.waitForEvent('download', { timeout: 15000 });
    await page.click('#btn-download');
    const download = await downloadPromise;

    // Verify filename
    const filename = download.suggestedFilename();
    expect(filename).toMatch(/^qr-code-\d+\.png$/);
  });

  test('Téléchargement SVG → fichier SVG valide', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Generate a QR code first
    await page.fill('#url-input', 'https://svg-test.com');
    await page.click('#btn-generate');
    await expect(page.locator('#qr-preview canvas')).toBeVisible({ timeout: 10000 });

    // Click SVG download
    const downloadPromise = page.waitForEvent('download', { timeout: 15000 });
    await page.click('#btn-download-svg');
    const download = await downloadPromise;

    // Verify filename
    const filename = download.suggestedFilename();
    expect(filename).toMatch(/^qr-code-\d+\.svg$/);

    // Verify file content starts with SVG tag
    const stream = await download.createReadStream();
    let content = '';
    for await (const chunk of stream) {
      content += chunk.toString();
    }
    expect(content).toContain('<svg');
  });

  test('Erreur: génération sans contenu → message annoncé', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Click generate without filling URL
    await page.click('#btn-generate');

    // SR live region should announce an error
    await expect(page.locator('#sr-live')).not.toBeEmpty({ timeout: 5000 });

    // No canvas should be present
    await expect(page.locator('#qr-preview canvas')).toHaveCount(0);
  });

  test('Reset → formulaire vidé et preview réinitialisée', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#btn-generate', { timeout: 10000 });

    // Generate a QR code
    await page.fill('#url-input', 'https://reset-test.com');
    await page.click('#btn-generate');
    await expect(page.locator('#qr-preview canvas')).toBeVisible({ timeout: 10000 });

    // Click reset
    await page.click('#btn-reset');

    // URL input should be empty
    await expect(page.locator('#url-input')).toHaveValue('');

    // Canvas should be gone, placeholder visible
    await expect(page.locator('#qr-preview canvas')).toHaveCount(0);
    await expect(page.locator('.qr-placeholder')).toBeVisible();

    // Download buttons should be hidden again
    await expect(page.locator('#qr-actions')).toBeHidden();
  });
});
