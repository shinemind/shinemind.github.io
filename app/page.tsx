"use client";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Target, MessageCircle, Music, BarChart3, Menu, X } from "lucide-react";
import EmailForm from "@/components/EmailFom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Lottie from "lottie-react";
import shining6Animation from "@/public/shining-6.json";
import LanguageSelector from "@/components/LanguageSelector";
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
                <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                  {t("nav.pricing")}
                </a>
                <a href="#waitlist" className="relative group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-pink-500/40">
                  <span className="relative z-10">{t("nav.joinWaitlist")}</span>
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
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {t("nav.pricing")}
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  {t("nav.joinWaitlist")}
                </a>
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
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <a
                href="#pricing"
                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-110 shadow-2xl hover:shadow-purple-500/60 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.viewPricing")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>
              </a>
              <a
                href="#waitlist"
                className="group relative bg-white/5 backdrop-blur-xl text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all border-2 border-white/20 shadow-2xl hover:shadow-white/20 hover:border-white/40 transform hover:scale-110"
              >
                <span className="flex items-center gap-2">
                  {t("hero.joinWaitlist")}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
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
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("features.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
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

            {/* Feature 2 */}
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

            {/* Feature 3 */}
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

            {/* Feature 4 */}
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

            {/* Feature 5 */}
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

            {/* Feature 6 */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                  <BarChart3 className="w-8 h-8 text-orange-300 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">{t("features.activityTracking.title")}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("features.activityTracking.description")}
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
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
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
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
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

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("pricing.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/0 to-gray-500/0 group-hover:from-gray-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-3xl font-black text-white mb-4">{t("pricing.free.title")}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white">{t("pricing.free.price")}</span>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.free.features.goals")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.free.features.affirmations")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.free.features.meditation")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.free.features.journal")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Monthly */}
            <div className="group relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/50 hover:border-purple-400/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 lg:scale-105">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/50">
                {t("pricing.monthly.badge")}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-purple-300 transition-colors">{t("pricing.monthly.title")}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{t("pricing.monthly.price")}</span>
                  <span className="text-gray-300 text-lg ml-2">{t("pricing.monthly.period")}</span>
                  <div className="text-sm text-blue-400 mt-2 font-semibold">{t("pricing.monthly.trial")}</div>
                </div>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base font-medium">{t("pricing.monthly.features.goals")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base font-medium">{t("pricing.monthly.features.affirmations")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base font-medium">{t("pricing.monthly.features.sleepSounds")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base font-medium">{t("pricing.monthly.features.analytics")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-yellow-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base font-medium">{t("pricing.monthly.features.support")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Yearly */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-green-300 transition-colors">{t("pricing.yearly.title")}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white">{t("pricing.yearly.price")}</span>
                  <span className="text-gray-300 text-lg ml-2">{t("pricing.yearly.period")}</span>
                  <div className="text-sm text-green-400 mt-2 font-semibold">{t("pricing.yearly.savings")}</div>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.yearly.features.goals")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.yearly.features.affirmations")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.yearly.features.sleepSounds")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.yearly.features.analytics")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.yearly.features.support")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Lifetime */}
            <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent rounded-3xl transition-all duration-500"></div>
              <div className="relative">
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors">{t("pricing.lifetime.title")}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white">{t("pricing.lifetime.price")}</span>
                  <div className="text-sm text-green-400 mt-2 font-semibold">{t("pricing.lifetime.note")}</div>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.lifetime.features.all")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.lifetime.features.unlimited")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.lifetime.features.updates")}</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="text-green-400 mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform">✓</span>
                    <span className="text-base">{t("pricing.lifetime.features.value")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-8">{t("pricing.availableOn")}</p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="inline-block transform hover:scale-105 transition-transform"
              >
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-32 bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              {t("waitlist.title")}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {t("waitlist.subtitle")}
            </p>

            <div className="flex flex-col items-center">
              <EmailForm />
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
                  src="/footer.png"
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
                  <a href="#waitlist" className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-lg">
                    {t("nav.joinWaitlist")}
                  </a>
                </li>
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
