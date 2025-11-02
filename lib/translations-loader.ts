// Translation loader to ensure all JSON files are properly loaded
import enTranslations from "@/translations/en.json";
import viTranslations from "@/translations/vi.json";
import jaTranslations from "@/translations/ja.json";
import koTranslations from "@/translations/ko.json";
import zhTWTranslations from "@/translations/zh-TW.json";
import zhCNTranslations from "@/translations/zh-CN.json";

export type Language = "en" | "vi" | "ja" | "ko" | "zh-TW" | "zh-CN";

export const translations = {
  en: enTranslations,
  vi: viTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  "zh-TW": zhTWTranslations,
  "zh-CN": zhCNTranslations,
} as const;

