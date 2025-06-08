const { detect } = require("tinyld");
const axios = require("axios");

function detectLanguage(text) {
  if (!text || typeof text !== "string" || text.trim() === "") {
    throw new Error("Invalid input: Please provide a non-empty string.");
  }
  return detect(text);
}

async function translate({ source = null, target = "en", text }) {
  if (!text || typeof text !== "string" || text.trim() === "") {
    throw new Error("Invalid input: Please provide a non-empty string.");
  }

  if (!source) {
    source = detectLanguage(text);
  }

  if (source === target) {
    return text; // No translation needed
  }

  const endpoint = "https://api.mymemory.translated.net/get";
  const response = await axios.post(
    `${endpoint}?q=${text}&langpair=${source}|${target}`
  );
  if (response?.data?.responseStatus == 200) {
    return response?.data?.responseData?.translatedText;
  }
  return text;
}

module.exports = {
  detectLanguage,
  translate,
};
