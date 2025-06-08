# 🌍 Language Detector and Translator

A lightweight and easy-to-use Node.js utility that **automatically detects the language** of a given text and translates it into your desired target language. Perfect for building multilingual apps, bots, or content processing tools.

---

## 📦 Installation

```bash
npm install auto-language-translator
```

---

## 🧾 Description

This package provides two main functions:

- `detectLanguage(text)`: Automatically detects the language of a given text.
- `translate({ text, source, target })`: Translates the given text from a source language to a target language.
  - If `source` is not provided, it will be **auto-detected**.
  - If `target` is not provided, it defaults to **English ("en")**.

---

## 🚀 Code Examples

### 🔍 A. Detect Language

```js
const { detectLanguage } = require("auto-language-translator");

console.log(detectLanguage("Bonjour, comment ça va?")); 
// Output: "fr" (French)
```

---

### 🌐 B. Translate Text (Auto-Detect Source, Default to English)

```js
const { detectLanguage, translate } = require("auto-language-translator");

// Translate function accepts three parameters:
// - text: The text to be translated
// - source: The source language code (optional, auto-detected if not provided)
// - target: The target language code (default is "en")

async function runTranslation() {
  try {
    const result = await translate({
      text: "Bonjour tout le monde",
    });
    console.log("Translated Text:", result);
  } catch (error) {
    console.error("Error during translation:", error.message);
  }
}
```

---

### 🇫🇷 C. Translate Text to a Specific Language

```js
const { detectLanguage, translate } = require("auto-language-translator");

// Translate function accepts three parameters:
// - text: The text to be translated
// - source: The source language code (optional, auto-detected if not provided)
// - target: The target language code (default is "en")

async function runTranslation() {
  try {
    const result = await translate({
      text: "Hello, how are you?",
      target: "fr",
    });
    console.log("Translated Text:", result);
  } catch (error) {
    console.error("Error during translation:", error.message);
  }
}
```

---



## 📘 License

MIT License

---

## 👤 Author

Created with ❤️ by Usman ali (https://github.com/Usman4772/)
