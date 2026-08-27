# QR Code Generator

> Generate customizable QR codes in your browser — 100% client-side, privacy-first

<div align="center">

![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-red)
![Platform](https://img.shields.io/badge/Platform-Web-green)
![Tests](https://img.shields.io/badge/Tests-Playwright%20%7C%20Vitest-blue)

**Your data never leaves your browser — no uploads, no servers, no tracking**

</div>

---

## 🔒 Privacy-First Design

Need to create a QR code for a Wi-Fi network, business contact, URL, or plain text?

QR Code Generator creates codes **locally in your browser** using the [`qrcode`](https://github.com/soldair/node-qrcode) library. Your data stays on your device — nothing is sent to any server.

---

## ⚡ Key Features

- **📝 Multiple Content Types**:
  - **URL** — Links to websites
  - **Wi-Fi** — Auto-connect devices (SSID + password + security type)
  - **vCard** — Business cards (name, phone, email, org, title, URL)
  - **Text** — Plain text or any custom string
- **🎨 Full Customization**:
  - **Size** — Adjustable QR code dimensions
  - **Colors** — Foreground and background colors
  - **Margins** — White space around the code
- **📥 Multiple Export Formats**:
  - **PNG** — Raster image
  - **SVG** — Scalable vector graphics
- **📋 Copy to Clipboard** — One-click copy as PNG
- **🎹 Keyboard Navigation** — Tab-friendly interface with arrow-key tab switching
- **🌐 Multi-Language** — Supports EN, FR, DE, ES, PT, NL, IT
- **♿ Accessible** — ARIA-compliant, screen reader support

---

## 🚀 Quick Start

```bash
git clone https://github.com/Hichiro6/qr-code-generator.git
cd qr-code-generator

npm install
npm run dev
```

---

## 📖 Usage Guide

### Step 1: Choose a Content Type
Click a tab to select the QR code type: **URL**, **Wi-Fi**, **vCard**, or **Text**.

### Step 2: Fill in the Details
- **URL** — Paste or type your website link
- **Wi-Fi** — Enter network name (SSID), password, and security type (WPA/WEP/Open)
- **vCard** — Add contact info: name, phone, email, organization, title, website
- **Text** — Type any text you want encoded

### Step 3: Customize Appearance
- **Size** — Choose a pixel dimension
- **Colors** — Pick foreground (code) and background colors
- **Margin** — Set white space around the code

### Step 4: Generate & Download
Click **Generate QR** to create the code.
Download as **PNG** or **SVG**, or **Copy** to clipboard.

---

## 🛠️ Technical Stack

| Technology | Purpose |
|------------|---------|
| **[Vite](https://vitejs.dev/)** | Build tool & dev server |
| **[qrcode](https://github.com/soldair/node-qrcode)** | QR code generation |
| **[Biome](https://biomejs.dev/)** | Linting & formatting |
| **[Vitest](https://vitest.dev/)** | Unit testing |
| **[Playwright](https://playwright.dev/)** | E2E testing |

---

## 🧪 Testing

```bash
npm run test:run       # Unit tests
npm run test:e2e       # E2E suite (generation, download, accessibility)
npm run test:ui        # Interactive mode
```

---

## 📂 Project Structure

```
qr-code-generator/
├── src/
│   ├── main.js           # Application logic
│   └── i18n.js           # Internationalization
├── styles/
│   └── main.css          # Global styles
├── public/
│   ├── manifest.json     # PWA manifest
│   └── favicon.svg
├── tests/
│   ├── unit/             # Unit tests
│   └── e2e/              # Playwright E2E tests + fixtures
├── vite.config.js        # Vite configuration
├── playwright.config.js  # Playwright configuration
└── biome.json            # Biome linting rules
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code with Biome |
| `npm run format` | Format code with Biome |
| `npm run test:run` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |

---

## 📝 Use Cases

- **Wi-Fi Sharing** — Let guests scan to join your network without typing passwords
- **Business Cards** — Embed vCard contacts for instant save to phone
- **Event Invitations** — Link RSVP forms, maps, or schedules
- **Product Pages** — Direct customers to product info or reviews
- **Contact Forms** — Pre-fill emails with subject lines
- **Payment Links** — Share crypto addresses or payment URLs securely
- **App Downloads** — Link to app store pages

---

## 🔐 Security & Privacy

- ✅ **No network calls** — All processing is local
- ✅ **No analytics** — No tracking or telemetry
- ✅ **No cookies** — Nothing stored externally
- ✅ **Open source** — Code is auditable
- ✅ **Client-side only** — No backend requirements

---

## 📄 License

Copyright © 2026 Hichiro6

Licensed under **CC BY-NC-ND 4.0** — Non-commercial use with attribution, no derivative works.

See [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ for privacy-conscious users**

[Report Bug](https://github.com/Hichiro6/qr-code-generator/issues) · [Request Feature](https://github.com/Hichiro6/qr-code-generator/issues)

</div>
