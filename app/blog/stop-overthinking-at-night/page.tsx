"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { stopOverthinkingNightContent } from "@/lib/blog-content/stop-overthinking-night";
import DownloadButtons from "@/components/DownloadButtons";

export default function StopOverthinkingNightPost() {
  const { language } = useLanguage();
  const content = stopOverthinkingNightContent[language];
  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"><ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{content.backToPost}</Link>
        <header className="mb-12">
          <div className="mb-6"><span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-purple-300 border border-purple-500/30">{content.category}</span></div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">{content.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">{content.subtitle}</p>
          <div className="flex items-center gap-6 text-sm text-gray-400"><div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{content.date}</span></div><div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{content.readTime}</span></div></div>
        </header>
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8"><h2 className="text-3xl font-bold text-white mb-6">{content.content.whyMatters.title}</h2><p className="text-gray-300 leading-relaxed">{content.content.whyMatters.intro}</p></div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-8"><h2 className="text-3xl font-bold text-white mb-6">{content.content.science.title}</h2><p className="text-gray-300 leading-relaxed">{content.content.science.description}</p></div>
          <div className="space-y-8">{content.content.techniques.map((technique: any, index: number) => (<div key={index} className="bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20"><h3 className="text-2xl font-bold text-purple-300 mb-4">{technique.title}</h3><p className="text-gray-300 leading-relaxed mb-4">{technique.description}</p>{technique.howTo && <div className="bg-white/5 rounded-xl p-4 mt-4"><p className="text-sm text-gray-400 italic">{technique.howTo}</p></div>}</div>))}</div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/30 mt-12"><h2 className="text-3xl font-bold text-white mb-6">{content.content.buildingResilience.title}</h2><ul className="space-y-4 text-gray-300">{content.content.buildingResilience.strategies.map((strategy: any, index: number) => (<li key={index} className="flex items-start gap-3"><span className="text-purple-400 font-bold mt-1">→</span><span><strong className="text-white">{strategy.label}:</strong> {strategy.text}</span></li>))}</ul></div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mt-8"><h2 className="text-3xl font-bold text-white mb-6">{content.content.conclusion.title}</h2><p className="text-gray-300 leading-relaxed">{content.content.conclusion.text}</p></div>
        </div>
        <div className="mt-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 text-center"><h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.downloadCTA.title}</h3><p className="text-gray-300 mb-8 text-lg">{content.downloadCTA.subtitle}</p><DownloadButtons /></div>
        <div className="mt-16 pt-12 border-t border-white/10"><h3 className="text-2xl font-bold text-white mb-8">{content.continueReading}</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><Link href="/blog/anxiety-management" className="group bg-gradient-to-br from-violet-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"><h4 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{content.relatedPosts.anxiety}</h4><p className="text-gray-400 text-sm">{content.relatedPosts.anxietyDesc}</p></Link><Link href="/blog/how-to-start-gratitude-journal" className="group bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"><h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{content.relatedPosts.journal}</h4><p className="text-gray-400 text-sm">{content.relatedPosts.journalDesc}</p></Link></div></div>
      </div>
    </article>
  );
}
