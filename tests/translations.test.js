"use strict";

/* Run with:  node --test "tests/*.test.js"
   Guards the translation tables in ai-flow.js against wrong-language
   entries and missing keys. */

const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "..", "ai-flow.js"), "utf8");
const start = source.indexOf("const IHI_TRANSLATIONS = {");
const end = source.indexOf("const IHI_ORIGINAL_TEXT");

assert.ok(start >= 0 && end > start, "could not locate the translation tables");

const T = new Function(source.slice(start, end) + "; return IHI_TRANSLATIONS;")();

/* Names that legitimately stay in Latin script. */
const BRANDS = /^(IHI|BDS|AI|Tele|MANAS|Tele-MANAS|Suicide|Crisis|Lifeline|Dr|WhatsApp|Google|Vibe|Coder|Spark|Creator|Product|Designer)$/i;

const latinWords = value =>
  (value.match(/[A-Za-z][A-Za-z'’-]{2,}/g) || []).filter(w => !BRANDS.test(w));

test("pure Hindi and pure Marathi contain no English words", () => {
  for (const lang of ["hi", "mr"]) {
    for (const [key, value] of Object.entries(T[lang])) {
      assert.deepStrictEqual(
        latinWords(value), [],
        `${lang}: "${key}" -> "${value}"`
      );
    }
  }
});

test("Hinglish uses Latin script only", () => {
  for (const [key, value] of Object.entries(T["hi-en"])) {
    assert.ok(!/[ऀ-ॿ]/.test(value), `hi-en: "${key}" -> "${value}"`);
  }
});

test("Marathi has no romanized Hindi", () => {
  for (const [key, value] of Object.entries(T.mr)) {
    assert.ok(!/ke baare|karein|kaise/i.test(value), `mr: "${key}" -> "${value}"`);
  }
});

/* Leftovers from the old partial-match translator. The full sentences
   they were part of are covered, so they are no longer used. */
const UNUSED_FRAGMENTS = new Set([
  "MODERN MEDICINE",
  "HOMEOPATHY",
  "Understanding",
  "your health",
  "shouldn't feel",
  "overwhelming.",
  "From a question",
  "to clearer understanding.",
  "Don't search for an answer.",
  "Explore the question."
]);

test("every language covers every Hindi key", () => {
  const keys = Object.keys(T.hi).filter(key => !UNUSED_FRAGMENTS.has(key));

  for (const lang of ["mr", "hi-en", "mr-en"]) {
    const missing = keys.filter(key => T[lang][key] === undefined);
    assert.deepStrictEqual(missing, [], `${lang} is missing keys`);
  }
});
