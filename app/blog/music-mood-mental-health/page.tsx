"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { musicMoodContent } from "@/lib/blog-content/music-mood";
import DownloadButtons from "@/components/DownloadButtons";

export default function MusicMoodPost() {
  const { language } = useLanguage();
  const content = musicMoodContent[language];

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {content.backToPost}
        </Link>

        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-indigo-500/20 to-violet-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-indigo-300 border border-indigo-500/30">
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

          <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.science.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.content.science.description}</p>
          </div>

          <div className="space-y-8">
            {content.content.techniques.map((technique: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-violet-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-violet-500/20">
                <h3 className="text-2xl font-bold text-indigo-300 mb-4">{technique.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">{technique.description}</p>
                {technique.howTo && (
                  <div className="bg-white/5 rounded-xl p-4 mt-4">
                    <p className="text-sm text-gray-400 italic">{technique.howTo}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-violet-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/30 mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.buildingResilience.title}</h2>
            <ul className="space-y-4 text-gray-300">
              {content.content.buildingResilience.strategies.map((strategy: any, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold mt-1">→</span>
                  <span><strong className="text-white">{strategy.label}:</strong> {strategy.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mt-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.content.conclusion.title}</h2>
            <p className="text-gray-300 leading-relaxed">{content.content.conclusion.text}</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl rounded-3xl p-10 border border-indigo-500/30 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.downloadCTA.title}</h3>
          <p className="text-gray-300 mb-8 text-lg">{content.downloadCTA.subtitle}</p>
          <DownloadButtons />
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">{content.continueReading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/stress-management" className="group bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{content.relatedPosts.stress}</h4>
              <p className="text-gray-400 text-sm">{content.relatedPosts.stressDesc}</p>
            </Link>
            <Link href="/blog/sleep-meditation" className="group bg-gradient-to-br from-indigo-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{content.relatedPosts.sleep}</h4>
              <p className="text-gray-400 text-sm">{content.relatedPosts.sleepDesc}</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
