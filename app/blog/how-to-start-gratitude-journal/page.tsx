"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { gratitudeJournalContent } from "@/lib/blog-content/gratitude-journal";

export default function GratitudeJournalPost() {
  const { language } = useLanguage();
  const content = gratitudeJournalContent[language];

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {content.backToPost}
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-pink-300 border border-pink-500/30">
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
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.why.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.sections.why.text}</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20 mb-8">
            <h2 className="text-3xl font-bold text-pink-300 mb-6">{content.sections.whatNeed.title}</h2>
            <ul className="space-y-4 text-gray-300">
              {content.sections.whatNeed.items.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-white">{content.sections.steps.title}</h2>
            {[content.sections.steps.step1, content.sections.steps.step2, content.sections.steps.step3, content.sections.steps.step4, content.sections.steps.step5].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-rose-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500/30 flex items-center justify-center flex-shrink-0 text-white font-bold border border-rose-500/50">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-rose-300 mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.prompts.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              {content.sections.prompts.list.map((prompt: string, index: number) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">→</span>
                  <span>{prompt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.science.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.sections.science.text}</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Gratitude Practice with ShineMind
          </h3>
          <p className="text-gray-300 mb-8 text-lg">Built-in gratitude journal with daily prompts and reminders</p>
          <a href="https://apps.apple.com/us/app/shinemind/id6754637065" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/40">
            Download ShineMind
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/benefits-of-daily-meditation" className="group bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Benefits of Daily Meditation</h4>
              <p className="text-gray-400 text-sm">Discover science-backed benefits of meditation →</p>
            </Link>
            <Link href="/blog/ai-powered-wellness-tips" className="group bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">AI-Powered Wellness Tips</h4>
              <p className="text-gray-400 text-sm">Learn how AI is transforming personal wellness →</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
