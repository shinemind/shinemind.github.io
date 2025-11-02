"use client";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Target, MessageCircle, Music, BarChart3, Menu, X } from "lucide-react";
import EmailForm from "@/components/EmailFom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Lottie from "lottie-react";
import shining2Animation from "@/public/shining-2.json";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
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
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#waitlist" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  Join Waitlist
                </a>
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
                  Home
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  Pricing
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  Join Waitlist
                </a>
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          <div className="space-y-0">
            <div className="flex justify-center mb-8">
              <div className="w-[270px] h-[270px] md:w-[330px] md:h-[330px]" style={{ filter: 'hue-rotate(-30deg) saturate(1.4) brightness(1.15)' }}>
                <Lottie
                  animationData={shining2Animation}
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 -mt-[30px]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Let your mind
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"> shine everyday</span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transform your daily routine with mindful meditation, gratitude journaling,
                and goal tracking. Build lasting habits for a healthier, happier you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
              <a
                href="#pricing"
                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">View Pricing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="#waitlist"
                className="relative bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/30 shadow-xl hover:shadow-2xl hover:border-white/50"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to Thrive
            </h2>
            <p className="text-xl text-gray-300">
              Powerful features designed for your wellbeing journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Guided Meditation</h3>
              <p className="text-gray-300">
                Customizable meditation sessions with breathing techniques, soothing animations,
                and calming background music.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Gratitude Journal</h3>
              <p className="text-gray-300">
                Capture daily moments of gratitude with photos, voice notes, and categorized entries
                to cultivate positivity.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Goal Tracking</h3>
              <p className="text-gray-300">
                Set and track unlimited goals across 10 life categories with difficulty levels
                and progress monitoring.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Affirmations</h3>
              <p className="text-gray-300">
                Record custom affirmations with text-to-speech playback to reinforce positive
                self-talk daily.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Music className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Sleep Sounds</h3>
              <p className="text-gray-300">
                Curated library of relaxing sleep sounds and music to help you wind down
                and improve sleep quality.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Activity Tracking</h3>
              <p className="text-gray-300">
                Track your wellness journey with detailed analytics, streaks, and weekly trends
                to stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Beautiful. Simple. Powerful.
            </h2>
            <p className="text-xl text-gray-300">
              A premium experience designed for your daily wellness routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
                <Image
                  src="/home-page.PNG"
                  alt="ShineMind Home Screen"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
                <Image
                  src="/data-page.PNG"
                  alt="ShineMind Activity Tracking"
                  width={400}
                  height={800}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
                <Image
                  src="/profile-page.PNG"
                  alt="ShineMind User Profile"
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
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Morning & Evening Rituals
            </h2>
            <p className="text-xl text-gray-300">
              Two powerful routines to bookend your day
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shine Routine */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md rounded-3xl p-10 border border-yellow-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">☀️</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Shine</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Start your mornings with intention and energy
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Guided meditation to center your mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Review and set daily goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Positive affirmations for motivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Track your progress and streaks</span>
                </li>
              </ul>
            </div>

            {/* Wind Down Routine */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-3xl p-10 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🌙</span>
                </div>
                <h3 className="text-3xl font-bold text-white">Wind Down</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                End your evenings with reflection and peace
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Reflect on daily accomplishments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Gratitude journaling with voice & photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Relaxing meditation sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span>Calming sleep sounds for better rest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-300">
              Free to start, premium to unlock your full potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Up to 3 goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>2 custom affirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Basic meditation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Gratitude journal</span>
                </li>
              </ul>
            </div>

            {/* Premium Monthly */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 border border-purple-500/40 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Monthly</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$6.99</span>
                <span className="text-gray-300">/month</span>
                <div className="text-sm text-blue-400 mt-1">7 days free trial</div>
              </div>
              <ul className="space-y-3 text-gray-200 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Unlimited goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Unlimited affirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Premium sleep sounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Yearly */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Yearly</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$39.99</span>
                <span className="text-gray-300">/year</span>
                <div className="text-sm text-green-400 mt-1">Save 50% • 7 days free trial</div>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited affirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Premium sleep sounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Lifetime */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-2">Lifetime</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$79.99</span>
                <div className="text-sm text-green-400">One-time payment</div>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>All Premium features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unlimited everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Future updates included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Best long-term value</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-8">Available on iOS</p>
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
      <section id="waitlist" className="py-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know when ShineMind launches. Sign up now and get exclusive early access!
          </p>

          <div className="flex flex-col items-center">
            <EmailForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/footer.png"
                  alt="ShineMind"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="text-2xl font-bold text-white">ShineMind</h3>
              </div>
              <p className="text-gray-400">
                Your daily companion for mental wellness and personal growth.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">
                    Join Waitlist
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@shinemind.app" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShineMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
