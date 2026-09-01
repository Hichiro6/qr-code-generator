/**
 * main.js — QR Code Generator
 * Generate QR codes for URL, WiFi, vCard, and Text using qrcode library
 */

import QRCode from 'qrcode';
import { initI18n, t } from './i18n.js';

// State
let currentTab = 'url';

// Elements
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');
const btnGenerate = document.getElementById('btn-generate');
const btnReset = document.getElementById('btn-reset');
const btnDownload = document.getElementById('btn-download');
const btnDownloadSvg = document.getElementById('btn-download-svg');
const btnCopy = document.getElementById('btn-copy');
const qrPreview = document.getElementById('qr-preview');
const qrActions = document.getElementById('qr-actions');
const qrSize = document.getElementById('qr-size');
const qrColor = document.getElementById('qr-color');
const qrBg = document.getElementById('qr-bg');
const qrMargin = document.getElementById('qr-margin');
const marginValue = document.getElementById('margin-value');
const srLive = document.getElementById('sr-live');

// Initialize
async function init() {
  await initI18n();
  setupEventListeners();
}

function setupEventListeners() {
  for (const tab of tabs) {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateTabs(e.key === 'ArrowRight' ? 1 : -1);
      }
    });
  }

  qrMargin.addEventListener('input', () => {
    marginValue.textContent = qrMargin.value;
  });

  btnGenerate.addEventListener('click', generateQr);
  btnReset.addEventListener('click', resetForm);
  btnDownload.addEventListener('click', downloadPng);
  btnDownloadSvg.addEventListener('click', downloadSvg);
  btnCopy.addEventListener('click', copyImage);
}

function switchTab(tabName) {
  currentTab = tabName;

  for (const tab of tabs) {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('tab--active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  }

  for (const panel of tabPanels) {
    const isActive = panel.id === `tab-${tabName}`;
    panel.classList.toggle('tab-panel--active', isActive);
    panel.hidden = !isActive;
  }
}

function navigateTabs(direction) {
  const tabArray = Array.from(tabs);
  const currentIndex = tabArray.findIndex((tab) => tab.classList.contains('tab--active'));
  const newIndex = (currentIndex + direction + tabArray.length) % tabArray.length;
  tabArray[newIndex].click();
  tabArray[newIndex].focus();
}

function generateQrData() {
  switch (currentTab) {
    case 'url':
      return generateUrlQr();
    case 'wifi':
      return generateWifiQr();
    case 'vcard':
      return generateVcardQr();
    case 'text':
      return generateTextQr();
    default:
      return '';
  }
}

function generateUrlQr() {
  const url = document.getElementById('url-input').value.trim();
  if (!url) {
    announce(t('error.empty'));
    return null;
  }

  // Auto-prepend https:// if missing
  let finalUrl = url;
  if (!url.match(/^https?:\/\//i)) {
    finalUrl = `https://${url}`;
  }

  try {
    new URL(finalUrl);
  } catch {
    announce(t('error.invalidUrl'));
    return null;
  }

  return finalUrl;
}

function generateWifiQr() {
  const ssid = document.getElementById('wifi-ssid').value.trim();
  const password = document.getElementById('wifi-password').value;
  const encryption = document.getElementById('wifi-encryption').value;
  const hidden = document.getElementById('wifi-hidden').checked;

  if (!ssid) {
    announce(t('error.empty'));
    return null;
  }

  const escapeStr = (str) => str.replace(/([\\;,:"])/g, '\\$1');
  const escapedSsid = escapeStr(ssid);
  const escapedPassword = escapeStr(password);

  let data = `WIFI:T:${encryption};S:${escapedSsid};`;
  if (encryption !== 'nopass') {
    data += `P:${escapedPassword};`;
  }
  if (hidden) {
    data += 'H:true;';
  }

  return data;
}

function generateVcardQr() {
  const prefix = document.getElementById('vcard-prefix').value.trim();
  const firstName = document.getElementById('vcard-firstname').value.trim();
  const lastName = document.getElementById('vcard-lastname').value.trim();
  const org = document.getElementById('vcard-org').value.trim();
  const phone = document.getElementById('vcard-phone').value.trim();
  const email = document.getElementById('vcard-email').value.trim();
  const website = document.getElementById('vcard-website').value.trim();
  const address = document.getElementById('vcard-address').value.trim();
  const note = document.getElementById('vcard-note').value.trim();

  if (!firstName && !lastName && !phone && !email) {
    announce(t('error.empty'));
    return null;
  }

  const lines = ['BEGIN:VCARD', 'VERSION:3.0'];

  const fullName = [prefix, firstName, lastName].filter(Boolean).join(' ');
  if (fullName) lines.push(`FN:${fullName}`);

  if (firstName || lastName) {
    lines.push(`N:${lastName || ''};${firstName || ''};${prefix || ''};;`);
  }

  if (org) lines.push(`ORG:${org}`);
  if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
  if (email) lines.push(`EMAIL:${email}`);
  if (website) lines.push(`URL:${website}`);
  if (address) lines.push(`ADR:;;${address};;;;`);
  if (note) lines.push(`NOTE:${note}`);

  lines.push('END:VCARD');

  return lines.join('\n');
}

function generateTextQr() {
  const text = document.getElementById('text-input').value.trim();
  if (!text) {
    announce(t('error.empty'));
    return null;
  }
  return text;
}

async function generateQr() {
  const data = generateQrData();

  if (!data) return;

  btnGenerate.disabled = true;
  btnGenerate.textContent = t('btn.downloading');

  try {
    const size = parseInt(qrSize.value, 10);
    const color = qrColor.value;
    const bg = qrBg.value;
    const margin = parseInt(qrMargin.value, 10);

    // Generate as canvas
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, data, {
      width: size,
      margin: margin,
      color: {
        dark: color,
        light: bg,
      },
      errorCorrectionLevel: 'M',
    });

    // Display in preview
    qrPreview.innerHTML = '';
    canvas.className = 'qr-canvas';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Generated QR code');
    qrPreview.appendChild(canvas);

    // Store canvas reference for downloads (avoids memory leak from repeated toDataURL)
    qrPreview.currentCanvas = canvas;
    qrActions.hidden = false;
    announce('QR code generated');

    // Store SVG data
    const svgString = await QRCode.toString(data, {
      type: 'svg',
      width: size,
      margin: margin,
      color: {
        dark: color,
        light: bg,
      },
      errorCorrectionLevel: 'M',
    });
    qrPreview.dataset.svgData = svgString;
  } catch (err) {
    announce(t('error.failed', { msg: err.message }));
    console.error('QR generation failed:', err);
  } finally {
    btnGenerate.disabled = false;
    btnGenerate.textContent = t('btn.generate');
  }
}

function downloadPng() {
  const canvas = qrPreview.currentCanvas;
  if (!canvas) return;

  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `qr-code-${Date.now()}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadSvg() {
  const svgData = qrPreview.dataset.svgData;
  if (!svgData) return;

  const blob = new Blob([svgData], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `qr-code-${Date.now()}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function copyImage() {
  const canvas = qrPreview.currentCanvas;
  if (!canvas) return;

  try {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        announce('Copy failed');
        return;
      }
      try {
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        announce('Image copied to clipboard');
      } catch (err) {
        console.error('Clipboard copy failed:', err);
        announce('Copy failed');
      }
    }, 'image/png');
  } catch (err) {
    console.error('Clipboard copy failed:', err);
    announce('Copy failed');
  }
}

function resetForm() {
  const inputs = document.querySelectorAll('.tab-panel input, .tab-panel textarea');
  for (const input of inputs) {
    if (input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = '';
    }
  }

  qrColor.value = '#0f1011';
  qrBg.value = '#ffffff';
  qrMargin.value = '2';
  marginValue.textContent = '2';
  qrSize.value = '512';

  qrPreview.innerHTML = `<p class="qr-placeholder">${t('btn.generate')}</p>`;
  qrActions.hidden = true;
  qrPreview.currentCanvas = null;
  delete qrPreview.dataset.svgData;
}

function announce(message) {
  srLive.textContent = message;
}

// Start
init();
