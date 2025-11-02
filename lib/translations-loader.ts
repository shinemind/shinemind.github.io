// Translation loader to ensure all JSON files are properly loaded
import enTranslations from "../translations/en.json";
import viTranslations from "../translations/vi.json";
import jaTranslations from "../translations/ja.json";
import koTranslations from "../translations/ko.json";
import zhTWTranslations from "../translations/zh-TW.json";
import zhCNTranslations from "../translations/zh-CN.json";

export type Language = "en" | "vi" | "ja" | "ko" | "zh-TW" | "zh-CN";

// Verify all imports loaded successfully
const allTranslations: Record<string, any> = {
  en: enTranslations,
  vi: viTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  "zh-TW": zhTWTranslations,
  "zh-CN": zhCNTranslations,
};

// Validate that all translations are loaded
const failedImports: string[] = [];
for (const [key, value] of Object.entries(allTranslations)) {
  if (!value) {
    console.error(`❌ Translation file for "${key}" is undefined/null`);
    failedImports.push(key);
  } else if (typeof value !== "object") {
    console.error(`❌ Translation file for "${key}" is not an object:`, typeof value);
    failedImports.push(key);
  } else if (Object.keys(value).length === 0) {
    console.error(`❌ Translation file for "${key}" is empty`);
    failedImports.push(key);
  } else {
    // Log success in development
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.log(`✅ Translation file for "${key}" loaded successfully (${Object.keys(value).length} top-level keys)`);
    }
  }
}

if (failedImports.length > 0) {
  console.error(`⚠ ${failedImports.length} translation file(s) failed to load:`, failedImports.join(", "));
}

export const translations = allTranslations as Record<Language, typeof enTranslations>;

// Debug info (only in development)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log("🌐 Translation files loaded:", Object.keys(translations).join(", "));
  console.log("📝 Translation status:", {
    en: translations.en?.nav ? "✓" : "✗",
    vi: translations.vi?.nav ? "✓" : "✗",
    ja: translations.ja?.nav ? "✓" : "✗",
    ko: translations.ko?.nav ? "✓" : "✗",
    "zh-TW": translations["zh-TW"]?.nav ? "✓" : "✗",
    "zh-CN": translations["zh-CN"]?.nav ? "✓" : "✗",
  });
}

