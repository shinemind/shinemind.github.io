"use client";
import { useLanguage } from "@/lib/i18n";

export default function ShutdownNotice() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl px-8 py-8 text-center space-y-4">
      <h3 className="text-2xl md:text-3xl font-bold text-white">{t("shutdown.title")}</h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{t("shutdown.message")}</p>
      <p className="text-gray-400 text-sm">
        {t("shutdown.contact")}{" "}
        <a href="mailto:contact@shinemind.app" className="text-purple-300 hover:text-white underline underline-offset-4 transition-colors">
          contact@shinemind.app
        </a>
      </p>
    </div>
  );
}
