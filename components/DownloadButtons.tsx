"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function DownloadButtons() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
      <a
        href="https://apps.apple.com/us/app/shinemind/id6754637065"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-2xl transition-all transform hover:scale-105 shadow-2xl border border-white/20 hover:border-white/40 min-w-[180px] h-[60px] flex items-center justify-center"
      >
        <div className="flex items-center gap-3">
          <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <div className="flex flex-col items-start space-y-0.5">
            <span className="text-[10px] font-normal whitespace-nowrap">{t("download.downloadOnThe")}</span>
            <span className="text-[22px] font-semibold leading-none whitespace-nowrap">App Store</span>
          </div>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.trinhngocdieu.shinemind"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-2xl transition-all transform hover:scale-105 shadow-2xl border border-white/20 hover:border-white/40 min-w-[180px] h-[60px] flex items-center justify-center"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/google-play-icon-new.svg"
            alt="Google Play"
            width={32}
            height={32}
            className="w-8 h-8 flex-shrink-0"
          />
          <div className="flex flex-col items-start space-y-0.5">
            <span className="text-[10px] font-normal whitespace-nowrap">{t("download.getItOn")}</span>
            <span className="text-[22px] font-semibold leading-none whitespace-nowrap">Google Play</span>
          </div>
        </div>
      </a>
    </div>
  );
}
