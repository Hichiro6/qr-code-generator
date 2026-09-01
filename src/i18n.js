/**
 * i18n.js — QR Code Generator
 * 7-language internationalization (EN/FR/DE/ES/PT/NL/IT)
 */

export const STORAGE_KEY = 'qr-code-generator-lang';

export const LANGUAGES = {
  en: { name: 'English', flag: '🇬🇧' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
  pt: { name: 'Português', flag: '🇵🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  it: { name: 'Italiano', flag: '🇮🇹' },
};

export const TRANSLATIONS = {
  en: {
    'app.title': 'QR Code Generator',
    'app.tagline': 'Create QR codes for URLs, WiFi, vCards, text — 100% in your browser',
    'privacy.badge': '🔒 Client-side only',
    'privacy.link': 'View on GitHub',
    'footer.bmc': 'Buy me a coffee',
    'lang.selector': 'Language selector',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Text',

    'form.url.label': 'Website URL',
    'form.url.placeholder': 'https://example.com',
    'form.wifi.ssid': 'Network Name (SSID)',
    'form.wifi.password': 'Password',
    'form.wifi.encryption': 'Encryption',
    'form.wifi.hidden': 'Hidden Network',
    'form.wifi.placeholder.ssid': 'MyWiFi',
    'form.wifi.placeholder.password': 'secret123',
    'form.vcard.prefix': 'Prefix',
    'form.vcard.firstName': 'First Name',
    'form.vcard.lastName': 'Last Name',
    'form.vcard.organization': 'Organization',
    'form.vcard.phone': 'Phone',
    'form.vcard.email': 'Email',
    'form.vcard.website': 'Website',
    'form.vcard.address': 'Address',
    'form.vcard.note': 'Note',
    'form.vcard.placeholder.first': 'John',
    'form.vcard.placeholder.last': 'Doe',
    'form.text.label': 'Your Text',
    'form.text.placeholder': 'Enter your message...',

    'options.size': 'Size',
    'options.color': 'Color',
    'options.bg': 'Background',
    'options.margin': 'Margin',
    'btn.generate': 'Generate QR Code',
    'btn.downloading': 'Generating...',
    'btn.download': 'Download PNG',
    'btn.downloadSvg': 'Download SVG',
    'btn.copy': 'Copy Image',
    'btn.reset': 'Reset',

    'error.empty': 'Please fill in at least one field',
    'error.invalidUrl': 'Invalid URL',
    'error.failed': 'Generation failed: {msg}',
  },

  fr: {
    'app.title': 'Générateur QR Code',
    'app.tagline': 'Créez des QR codes pour URL, WiFi, vCard, texte — 100% dans votre navigateur',
    'privacy.badge': '🔒 Client-side uniquement',
    'privacy.link': 'Voir sur GitHub',
    'footer.bmc': 'Offrir un café',
    'lang.selector': 'Sélecteur de langue',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Texte',

    'form.url.label': 'URL du site web',
    'form.url.placeholder': 'https://exemple.com',
    'form.wifi.ssid': 'Nom du réseau (SSID)',
    'form.wifi.password': 'Mot de passe',
    'form.wifi.encryption': 'Cryptage',
    'form.wifi.hidden': 'Réseau caché',
    'form.wifi.placeholder.ssid': 'MonWiFi',
    'form.wifi.placeholder.password': 'secret123',
    'form.vcard.prefix': 'Préfixe',
    'form.vcard.firstName': 'Prénom',
    'form.vcard.lastName': 'Nom',
    'form.vcard.organization': 'Organisation',
    'form.vcard.phone': 'Téléphone',
    'form.vcard.email': 'Email',
    'form.vcard.website': 'Site web',
    'form.vcard.address': 'Adresse',
    'form.vcard.note': 'Note',
    'form.vcard.placeholder.first': 'Jean',
    'form.vcard.placeholder.last': 'Dupont',
    'form.text.label': 'Votre texte',
    'form.text.placeholder': 'Entrez votre message...',

    'options.size': 'Taille',
    'options.color': 'Couleur',
    'options.bg': 'Arrière-plan',
    'options.margin': 'Marges',
    'btn.generate': 'Générer le QR code',
    'btn.downloading': 'Génération...',
    'btn.download': 'Télécharger PNG',
    'btn.downloadSvg': 'Télécharger SVG',
    'btn.copy': "Copier l'image",
    'btn.reset': 'Réinitialiser',

    'error.empty': 'Veuillez remplir au moins un champ',
    'error.invalidUrl': 'URL invalide',
    'error.failed': 'Échec génération : {msg}',
  },

  de: {
    'app.title': 'QR-Code-Generator',
    'app.tagline': 'Erstellen Sie QR-Codes für URLs, WiFi, vCards, Text — 100% im Browser',
    'privacy.badge': '🔒 Nur Client-Seite',
    'privacy.link': 'Auf GitHub ansehen',
    'footer.bmc': 'Kaffee ausgeben',
    'lang.selector': 'Sprachauswahl',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Text',

    'form.url.label': 'Webseite URL',
    'form.url.placeholder': 'https://beispiel.de',
    'form.wifi.ssid': 'Netzwerkname (SSID)',
    'form.wifi.password': 'Passwort',
    'form.wifi.encryption': 'Verschlüsselung',
    'form.wifi.hidden': 'Verstecktes Netzwerk',
    'form.wifi.placeholder.ssid': 'MeinWLAN',
    'form.wifi.placeholder.password': 'geheim123',
    'form.vcard.prefix': 'Präfix',
    'form.vcard.firstName': 'Vorname',
    'form.vcard.lastName': 'Nachname',
    'form.vcard.organization': 'Organisation',
    'form.vcard.phone': 'Telefon',
    'form.vcard.email': 'E-Mail',
    'form.vcard.website': 'Webseite',
    'form.vcard.address': 'Adresse',
    'form.vcard.note': 'Notiz',
    'form.vcard.placeholder.first': 'Max',
    'form.vcard.placeholder.last': 'Mustermann',
    'form.text.label': 'Ihr Text',
    'form.text.placeholder': 'Nachricht eingeben...',

    'options.size': 'Größe',
    'options.color': 'Farbe',
    'options.bg': 'Hintergrund',
    'options.margin': 'Rand',
    'btn.generate': 'QR-Code erstellen',
    'btn.downloading': 'Erstelle...',
    'btn.download': 'PNG herunterladen',
    'btn.downloadSvg': 'SVG herunterladen',
    'btn.copy': 'Bild kopieren',
    'btn.reset': 'Zurücksetzen',

    'error.empty': 'Bitte füllen Sie mindestens ein Feld aus',
    'error.invalidUrl': 'Ungültige URL',
    'error.failed': 'Generierung fehlgeschlagen: {msg}',
  },

  es: {
    'app.title': 'Generador de Código QR',
    'app.tagline': 'Crear códigos QR para URLs, WiFi, vCards, texto — 100% en el navegador',
    'privacy.badge': '🔒 Solo cliente',
    'privacy.link': 'Ver en GitHub',
    'footer.bmc': 'Invítame un café',
    'lang.selector': 'Selector de idioma',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Texto',

    'form.url.label': 'URL del sitio web',
    'form.url.placeholder': 'https://ejemplo.com',
    'form.wifi.ssid': 'Nombre de red (SSID)',
    'form.wifi.password': 'Contraseña',
    'form.wifi.encryption': 'Cifrado',
    'form.wifi.hidden': 'Red oculta',
    'form.wifi.placeholder.ssid': 'MiWiFi',
    'form.wifi.placeholder.password': 'secreto123',
    'form.vcard.prefix': 'Prefijo',
    'form.vcard.firstName': 'Nombre',
    'form.vcard.lastName': 'Apellidos',
    'form.vcard.organization': 'Organización',
    'form.vcard.phone': 'Teléfono',
    'form.vcard.email': 'Correo electrónico',
    'form.vcard.website': 'Sitio web',
    'form.vcard.address': 'Dirección',
    'form.vcard.note': 'Nota',
    'form.vcard.placeholder.first': 'Juan',
    'form.vcard.placeholder.last': 'Pérez',
    'form.text.label': 'Tu texto',
    'form.text.placeholder': 'Ingresa tu mensaje...',

    'options.size': 'Tamaño',
    'options.color': 'Color',
    'options.bg': 'Fondo',
    'options.margin': 'Margen',
    'btn.generate': 'Generar código QR',
    'btn.downloading': 'Generando...',
    'btn.download': 'Descargar PNG',
    'btn.downloadSvg': 'Descargar SVG',
    'btn.copy': 'Copiar imagen',
    'btn.reset': 'Reiniciar',

    'error.empty': 'Por favor completa al menos un campo',
    'error.invalidUrl': 'URL inválida',
    'error.failed': 'Generación fallida: {msg}',
  },

  pt: {
    'app.title': 'Gerador de Código QR',
    'app.tagline': 'Criar códigos QR para URLs, WiFi, vCards, texto — 100% no navegador',
    'privacy.badge': '🔒 Apenas cliente',
    'privacy.link': 'Ver no GitHub',
    'footer.bmc': 'Pague um café',
    'lang.selector': 'Seletor de idioma',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Texto',

    'form.url.label': 'URL do site',
    'form.url.placeholder': 'https://exemplo.com',
    'form.wifi.ssid': 'Nome da rede (SSID)',
    'form.wifi.password': 'Senha',
    'form.wifi.encryption': 'Criptografia',
    'form.wifi.hidden': 'Rede oculta',
    'form.wifi.placeholder.ssid': 'MinhaRede',
    'form.wifi.placeholder.password': 'secreto123',
    'form.vcard.prefix': 'Prefixo',
    'form.vcard.firstName': 'Primeiro nome',
    'form.vcard.lastName': 'Sobrenome',
    'form.vcard.organization': 'Organização',
    'form.vcard.phone': 'Telefone',
    'form.vcard.email': 'Email',
    'form.vcard.website': 'Site',
    'form.vcard.address': 'Endereço',
    'form.vcard.note': 'Nota',
    'form.vcard.placeholder.first': 'João',
    'form.vcard.placeholder.last': 'Silva',
    'form.text.label': 'Seu texto',
    'form.text.placeholder': 'Digite sua mensagem...',

    'options.size': 'Tamanho',
    'options.color': 'Cor',
    'options.bg': 'Fundo',
    'options.margin': 'Margem',
    'btn.generate': 'Gerar código QR',
    'btn.downloading': 'Gerando...',
    'btn.download': 'Baixar PNG',
    'btn.downloadSvg': 'Baixar SVG',
    'btn.copy': 'Copiar imagem',
    'btn.reset': 'Redefinir',

    'error.empty': 'Por favor preencha pelo menos um campo',
    'error.invalidUrl': 'URL inválida',
    'error.failed': 'Falha na geração: {msg}',
  },

  nl: {
    'app.title': 'QR Code Generator',
    'app.tagline': "Maak QR-codes voor URL's, WiFi, vCards, tekst — 100% in je browser",
    'privacy.badge': '🔒 Alleen cliëntkant',
    'privacy.link': 'Bekijk op GitHub',
    'footer.bmc': 'Koffie aanbieden',
    'lang.selector': 'Taalkeuze',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Tekst',

    'form.url.label': 'Website URL',
    'form.url.placeholder': 'https://voorbeeld.nl',
    'form.wifi.ssid': 'Netwerknaam (SSID)',
    'form.wifi.password': 'Wachtwoord',
    'form.wifi.encryption': 'Versleuteling',
    'form.wifi.hidden': 'Verborgen netwerk',
    'form.wifi.placeholder.ssid': 'MijnWiFi',
    'form.wifi.placeholder.password': 'geheim123',
    'form.vcard.prefix': 'Voorvoegsel',
    'form.vcard.firstName': 'Voornaam',
    'form.vcard.lastName': 'Achternaam',
    'form.vcard.organization': 'Organisatie',
    'form.vcard.phone': 'Telefoon',
    'form.vcard.email': 'E-mail',
    'form.vcard.website': 'Website',
    'form.vcard.address': 'Adres',
    'form.vcard.note': 'Opmerking',
    'form.vcard.placeholder.first': 'Jan',
    'form.vcard.placeholder.last': 'Jansen',
    'form.text.label': 'Je tekst',
    'form.text.placeholder': 'Voer je bericht in...',

    'options.size': 'Grootte',
    'options.color': 'Kleur',
    'options.bg': 'Achtergrond',
    'options.margin': 'Marge',
    'btn.generate': 'Genereer QR-code',
    'btn.downloading': 'Genereer...',
    'btn.download': 'Download PNG',
    'btn.downloadSvg': 'Download SVG',
    'btn.copy': 'Afbeelding kopiëren',
    'btn.reset': 'Herstellen',

    'error.empty': 'Vul ten minste één veld in',
    'error.invalidUrl': 'Ongeldige URL',
    'error.failed': 'Generatie mislukt: {msg}',
  },

  it: {
    'app.title': 'Generatore QR Code',
    'app.tagline': 'Crea codici QR per URL, WiFi, vCard, testo — 100% nel browser',
    'privacy.badge': '🔒 Solo lato client',
    'privacy.link': 'Vedi su GitHub',
    'footer.bmc': 'Offri un caffè',
    'lang.selector': 'Selettore lingua',

    'tabs.url': 'URL',
    'tabs.wifi': 'WiFi',
    'tabs.vcard': 'vCard',
    'tabs.text': 'Testo',

    'form.url.label': 'URL sito web',
    'form.url.placeholder': 'https://esempio.it',
    'form.wifi.ssid': 'Nome rete (SSID)',
    'form.wifi.password': 'Password',
    'form.wifi.encryption': 'Crittografia',
    'form.wifi.hidden': 'Rete nascosta',
    'form.wifi.placeholder.ssid': 'MiaRete',
    'form.wifi.placeholder.password': 'segreto123',
    'form.vcard.prefix': 'Prefisso',
    'form.vcard.firstName': 'Nome',
    'form.vcard.lastName': 'Cognome',
    'form.vcard.organization': 'Organizzazione',
    'form.vcard.phone': 'Telefono',
    'form.vcard.email': 'Email',
    'form.vcard.website': 'Sito web',
    'form.vcard.address': 'Indirizzo',
    'form.vcard.note': 'Nota',
    'form.vcard.placeholder.first': 'Mario',
    'form.vcard.placeholder.last': 'Rossi',
    'form.text.label': 'Il tuo testo',
    'form.text.placeholder': 'Inserisci il tuo messaggio...',

    'options.size': 'Dimensione',
    'options.color': 'Colore',
    'options.bg': 'Sfondo',
    'options.margin': 'Margine',
    'btn.generate': 'Genera QR Code',
    'btn.downloading': 'Generazione...',
    'btn.download': 'Scarica PNG',
    'btn.downloadSvg': 'Scarica SVG',
    'btn.copy': 'Copia immagine',
    'btn.reset': 'Ripristina',

    'error.empty': 'Compila almeno un campo',
    'error.invalidUrl': 'URL non valido',
    'error.failed': 'Generazione fallita: {msg}',
  },
};

let currentLang = detectLanguage();

function detectLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGUAGES[stored]) {
      return stored;
    }
  } catch {
    // localStorage not available
  }
  const browserLang = navigator.language.slice(0, 2);
  if (LANGUAGES[browserLang]) {
    return browserLang;
  }
  return 'en';
}

export function getCurrentLang() {
  return currentLang;
}

export function setCurrentLang(langCode) {
  if (LANGUAGES[langCode]) {
    currentLang = langCode;
    try {
      localStorage.setItem(STORAGE_KEY, langCode);
    } catch {
      // localStorage not available
    }
    document.documentElement.lang = langCode;
    return true;
  }
  return false;
}

export function t(key, params = {}) {
  const translation = TRANSLATIONS[currentLang]?.[key];
  if (!translation) {
    console.warn(`Missing translation for key: ${key} (lang: ${currentLang})`);
    return key;
  }
  return translation.replace(/\{(\w+)\}/g, (_, param) => params[param] ?? `{${param}}`);
}

export async function initI18n() {
  document.documentElement.lang = currentLang;

  const elements = document.querySelectorAll('[data-i18n]');
  for (const el of elements) {
    const key = el.getAttribute('data-i18n');
    if (key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  }

  const ariaElements = document.querySelectorAll('[data-i18n-attr]');
  for (const el of ariaElements) {
    const attrMapping = el.getAttribute('data-i18n-attr');
    const [attrName, translateKey] = attrMapping.split(':').map((s) => s.trim());
    if (attrName && translateKey) {
      el.setAttribute(attrName, t(translateKey));
    }
  }

  const langSelector = document.getElementById('lang-selector');
  if (langSelector) {
    setupLangSelector(langSelector);
  }
}

function setupLangSelector(container) {
  container.classList.add('lang-selector');
  container.setAttribute('role', 'group');
  container.setAttribute('aria-label', t('lang.selector'));
  for (const [code, lang] of Object.entries(LANGUAGES)) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-btn';
    btn.textContent = lang.flag;
    btn.title = lang.name;
    btn.setAttribute('aria-label', lang.name);
    btn.setAttribute('data-lang', code);
    if (code === currentLang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.setAttribute('aria-pressed', 'false');
    }

    btn.addEventListener('click', () => {
      if (code === currentLang) return;
      if (setCurrentLang(code)) {
        window.location.reload();
      }
    });

    container.appendChild(btn);
  }
}
