"use client";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import LanguageSelector from "@/components/LanguageSelector";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation - Same as Homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ShineMind"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-white font-bold text-2xl">ShineMind</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#home" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {t("nav.home")}
              </a>
              <a href="/#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {t("nav.features")}
              </a>
              <a href="/#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                {t("nav.pricing")}
              </a>
              <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-all duration-300 font-medium">
                {t("nav.blog")}
              </Link>
              <a
                href="https://apps.apple.com/us/app/shinemind/id6754637065"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-pink-500/40"
              >
                <span className="relative z-10">{t("nav.downloadNow")}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </a>
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a
                href="/#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {t("nav.home")}
              </a>
              <a
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {t("nav.features")}
              </a>
              <a
                href="/#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {t("nav.pricing")}
              </a>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-purple-400 hover:text-purple-300 transition-colors py-2"
              >
                {t("nav.blog")}
              </Link>
              <a
                href="https://apps.apple.com/us/app/shinemind/id6754637065"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                {t("nav.downloadNow")}
              </a>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="pt-20">{children}</div>

      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-xl border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/footer.png"
                alt="ShineMind"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <h3 className="text-3xl font-black text-white">ShineMind</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Transform your daily routine with AI-powered wellness insights
            </p>
            <div className="flex justify-center gap-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="mailto:contact@shinemind.app" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-8">
              &copy; {new Date().getFullYear()} ShineMind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
