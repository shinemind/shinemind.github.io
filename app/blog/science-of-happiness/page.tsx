"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { scienceHappinessContent } from "@/lib/blog-content/science-happiness";

export default function ScienceOfHappinessPost() {
  const { language } = useLanguage();
  const content = scienceHappinessContent[language];

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {content.backToPost}
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-500/20 to-green-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-yellow-300 border border-yellow-500/30">
              {content.category}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">{content.subtitle}</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{content.date}</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{content.readTime}</span></div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.whyMatters.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.content.whyMatters.intro}</p>
          </div>

          <div className="space-y-8">
            {content.content.benefits.map((benefit: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-yellow-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-500/30 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.gettingStarted.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{content.content.gettingStarted.intro}</p>
            <ul className="space-y-4 text-gray-300">
              {content.content.gettingStarted.tips.map((tip: any, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">→</span>
                  <span><strong className="text-white">{tip.label}:</strong> {tip.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mt-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.conclusion.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.content.conclusion.text}</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-yellow-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl p-10 border border-yellow-500/30 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.downloadCTA.title}</h3>
          <p className="text-gray-300 mb-8 text-lg">{content.downloadCTA.subtitle}</p>
          <a href="https://apps.apple.com/us/app/shinemind/id6754637065" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-green-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-green-600 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/40">
            {content.downloadCTA.button}
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">{content.continueReading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/benefits-of-daily-meditation" className="group bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{content.relatedPosts.meditation}</h4>
              <p className="text-gray-400 text-sm">{content.relatedPosts.meditationDesc}</p>
            </Link>
            <Link href="/blog/how-to-start-gratitude-journal" className="group bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{content.relatedPosts.gratitude}</h4>
              <p className="text-gray-400 text-sm">{content.relatedPosts.gratitudeDesc}</p>
            </Link>
            <Link href="/blog/morning-routines-mental-health" className="group bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{content.relatedPosts.morning}</h4>
              <p className="text-gray-400 text-sm">{content.relatedPosts.morningDesc}</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
