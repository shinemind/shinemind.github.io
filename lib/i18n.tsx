"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "./translations-loader";

const LANGUAGES: Record<Language, string> = {
  en: "English",
  vi: "Tiếng Việt",
  ja: "日本語",
  ko: "한국어",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
};

// Re-export Language type
export type { Language };

// Use translations from the loader
const TRANSLATION_MAP = translations;

interface Translations {
  [key: string]: any;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [translations, setTranslations] = useState<Translations>(TRANSLATION_MAP.en);

  // Detect browser language on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const detectedLang = detectBrowserLanguage();
    const savedLang = localStorage.getItem("language") as Language | null;
    const initialLang = savedLang || detectedLang;
    setLanguageState(initialLang);
    loadTranslations(initialLang);
  }, []);

  // Load translations when language changes
  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  function detectBrowserLanguage(): Language {
    if (typeof window === "undefined") return "en";

    const browserLang = navigator.language || (navigator as any).userLanguage || "en";
    const langCode = browserLang.split("-")[0];
    const fullLang = browserLang;

    // Map browser languages to supported languages
    const langMap: Record<string, Language> = {
      en: "en",
      vi: "vi",
      ja: "ja",
      ko: "ko",
      "zh-TW": "zh-TW",
      "zh-CN": "zh-CN",
      zh: fullLang.startsWith("zh-TW") || fullLang.startsWith("zh-HK") || fullLang.startsWith("zh-MO") ? "zh-TW" : "zh-CN",
    };

    return langMap[fullLang] || langMap[langCode] || "en";
  }

  function loadTranslations(lang: Language) {
    try {
      const translationData = TRANSLATION_MAP[lang];
      if (translationData) {
        // Create a new object to ensure React detects the change
        setTranslations({ ...translationData });
      } else {
        // Fallback to English if translation not found
        console.warn(`Translation not found for: ${lang}, using English`);
        setTranslations({ ...TRANSLATION_MAP.en });
      }
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      // Fallback to English on error
      setTranslations({ ...TRANSLATION_MAP.en });
    }
  }

  function setLanguage(lang: Language) {
    if (lang === language) return; // No change needed
    
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    loadTranslations(lang);
  }

  function t(key: string): string {
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to key if translation not found
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

