"use client";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Target, MessageCircle, Music, Menu, X, Bot } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Lottie from "lottie-react";
import shining6Animation from "@/public/shining-6.json";
import LanguageSelector from "@/components/LanguageSelector";
import ShutdownNotice from "@/components/ShutdownNotice";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="ShineMind"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-white font-bold text-2xl">ShineMind</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {t("nav.home")}
                </a>
                <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {t("nav.features")}
                </a>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {t("nav.blog")}
                </Link>
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
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {t("nav.home")}
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {t("nav.features")}
                </a>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {t("nav.blog")}
                </Link>
                <div className="pt-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Starry Background */}
          <div className="stars"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>

          {/* Premium Glows */}
          <div className="premium-glow glow-1"></div>
          <div className="premium-glow glow-2"></div>
          <div className="premium-glow glow-3"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <div className="space-y-0">
            <div className="flex justify-center mb-8">
              <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px]">
                {/* Enhanced Glow Ring */}
                <div className="absolute inset-[-20px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>

                {/* Main Animation Container */}
                <div className="relative w-full h-full drop-shadow-[0_0_40px_rgba(168,85,247,0.6)]">
                  {/* Lottie animation */}
                  <div className="absolute inset-0" style={{ filter: 'grayscale(1) brightness(1.8) contrast(1.2)' }}>
                    <Lottie
                      animationData={shining6Animation}
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                  {/* Enhanced Gradient colorization overlay */}
                  <div className="absolute inset-0 rounded-full pointer-events-none mix-blend-screen opacity-95 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300" />
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 -mt-[20px]">
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                {t("hero.title")}{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                    {t("hero.titleHighlight")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 blur-2xl opacity-30 -z-10"></div>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                {t("hero.subtitle")}
              </p>
            </div>
            <div className="pt-12">
              <ShutdownNotice />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("features.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - AI Wellness */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
                  <Bot className="w-8 h-8 text-emerald-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">{t("features.aiWellness.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.aiWellness.description")}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <Sparkles className="w-8 h-8 text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{t("features.guidedMeditation.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.guidedMeditation.description")}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/30 to-pink-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/20">
                  <Heart className="w-8 h-8 text-pink-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">{t("features.gratitudeJournal.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.gratitudeJournal.description")}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                  <Target className="w-8 h-8 text-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">{t("features.goalTracking.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.goalTracking.description")}
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                  <MessageCircle className="w-8 h-8 text-purple-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{t("features.affirmations.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.affirmations.description")}
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                  <Music className="w-8 h-8 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{t("features.sleepSounds.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.sleepSounds.description")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("screenshots.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              {t("screenshots.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 group-hover:border-purple-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/1.png"
                  alt="App screenshot 1"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 group-hover:border-blue-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/2.png"
                  alt="App screenshot 2"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 group-hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/3.png"
                  alt="App screenshot 3"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 group-hover:border-emerald-400/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <Image
                  src="/4.png"
                  alt="App screenshot 4"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Routine Section */}
      <section className="relative py-32 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("routines.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              {t("routines.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shine Routine */}
            <div className="group relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
                    <span className="text-5xl">☀️</span>
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-yellow-300 transition-colors">{t("routines.shine.title")}</h3>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {t("routines.shine.description")}
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.shine.items.meditation")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.shine.items.goals")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.shine.items.affirmations")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.shine.items.tracking")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wind Down Routine */}
            <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-10 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                    <span className="text-5xl">🌙</span>
                  </div>
                  <h3 className="text-4xl font-black text-white group-hover:text-blue-300 transition-colors">{t("routines.windDown.title")}</h3>
                </div>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {t("routines.windDown.description")}
                </p>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-blue-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.windDown.items.accomplishments")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-blue-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.windDown.items.gratitude")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-blue-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.windDown.items.meditation")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-blue-400 mt-1 text-xl font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-lg">{t("routines.windDown.items.sleepSounds")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative py-16 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="ShineMind"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <h3 className="text-3xl font-black text-white">ShineMind</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">{t("footer.legal")}</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-lg">
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-lg">
                    {t("footer.termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">{t("footer.support")}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@shinemind.app" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-lg">
                    {t("footer.contactUs")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 text-lg">&copy; {new Date().getFullYear()} ShineMind. {t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
