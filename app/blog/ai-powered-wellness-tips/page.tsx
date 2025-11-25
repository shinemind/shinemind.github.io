"use client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Sparkles, Brain, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { aiWellnessContent } from "@/lib/blog-content/ai-wellness";

export default function AIPoweredWellnessPost() {
  const { language } = useLanguage();
  const content = aiWellnessContent[language];

  return (
    <article className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {content.backToPost}
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold text-purple-300 border border-purple-500/30 flex items-center gap-2 w-fit">
              <Sparkles className="w-4 h-4" />
              {content.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {content.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            {content.subtitle}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{content.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{content.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.intro.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {content.sections.intro.text}
            </p>
          </div>

          {/* How AI Enhances Wellness */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Brain className="w-8 h-8 text-purple-400" />
              {content.sections.howAI.title}
            </h2>

            {/* Personalization */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/30 flex items-center justify-center flex-shrink-0 border border-purple-500/50">
                  <Target className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">{content.sections.howAI.personalization.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{content.sections.howAI.personalization.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {content.sections.howAI.personalization.text}
              </p>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 flex items-center justify-center flex-shrink-0 border border-indigo-500/50">
                  <TrendingUp className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-300 mb-2">{content.sections.howAI.predictive.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{content.sections.howAI.predictive.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {content.sections.howAI.predictive.text}
              </p>
            </div>

            {/* Adaptive Learning */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/30 flex items-center justify-center flex-shrink-0 border border-cyan-500/50">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">{content.sections.howAI.adaptive.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{content.sections.howAI.adaptive.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {content.sections.howAI.adaptive.text}
              </p>
            </div>

            {/* Intelligent Content */}
            <div className="bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-pink-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/30 flex items-center justify-center flex-shrink-0 border border-pink-500/50">
                  <Brain className="w-6 h-6 text-pink-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-300 mb-2">{content.sections.howAI.intelligent.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{content.sections.howAI.intelligent.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {content.sections.howAI.intelligent.text}
              </p>
            </div>
          </div>

          {/* Practical AI Wellness Tips */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-emerald-500/30 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.practicalTips.title}</h2>

            <div className="space-y-6">
              {content.sections.practicalTips.tips.map((tip: any, index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-emerald-300 mb-3">{tip.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Benefits */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-white">{content.sections.benefits.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.sections.benefits.stats.map((stat: any, index: number) => {
                const gradients = [
                  { gradient: "from-blue-500/10", border: "border-blue-500/20", color: "text-blue-300" },
                  { gradient: "from-purple-500/10", border: "border-purple-500/20", color: "text-purple-300" },
                  { gradient: "from-pink-500/10", border: "border-pink-500/20", color: "text-pink-300" },
                  { gradient: "from-emerald-500/10", border: "border-emerald-500/20", color: "text-emerald-300" }
                ];
                const style = gradients[index % 4];

                return (
                  <div key={index} className={`bg-gradient-to-br ${style.gradient} to-transparent backdrop-blur-xl rounded-2xl p-6 border ${style.border}`}>
                    <h4 className={`text-lg font-bold ${style.color} mb-3`}>{stat.title}</h4>
                    <p className="text-gray-300 text-sm">
                      {stat.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Privacy & Ethics */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-orange-500/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.privacy.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {content.sections.privacy.text}
            </p>
          </div>

          {/* The Future */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-indigo-500/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">{content.sections.future.title}</h2>
            <div className="space-y-4">
              {content.sections.future.trends.map((trend: any, index: number) => {
                const colors = ["text-indigo-300", "text-purple-300", "text-pink-300", "text-cyan-300"];
                const color = colors[index % 4];

                return (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className={`text-lg font-bold ${color} mb-2`}>{trend.title}</h4>
                    <p className="text-gray-300 text-sm">
                      {trend.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conclusion */}
          {content.sections.conclusion && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">{content.sections.conclusion.title}</h2>
              <p className="text-gray-300 leading-relaxed">
                {content.sections.conclusion.text}
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {content.downloadCTA?.title || "Experience AI-Powered Wellness with ShineMind"}
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            {content.downloadCTA?.subtitle || "Get personalized meditation, insights, and recommendations tailored to your unique wellness journey"}
          </p>
          <a
            href="https://apps.apple.com/us/app/shinemind/id6754637065"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/40"
          >
            <Sparkles className="w-5 h-5" />
            {content.downloadCTA?.button || "Try ShineMind Free"}
          </a>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8">{content.continueReading || "Continue Reading"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog/benefits-of-daily-meditation"
              className="group bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {content.relatedPosts?.meditation || "Benefits of Daily Meditation"}
              </h4>
              <p className="text-gray-400 text-sm">
                {content.relatedPosts?.meditationDesc || "Discover science-backed benefits of meditation →"}
              </p>
            </Link>
            <Link
              href="/blog/how-to-start-gratitude-journal"
              className="group bg-gradient-to-br from-pink-500/10 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                {content.relatedPosts?.gratitude || "How to Start a Gratitude Journal"}
              </h4>
              <p className="text-gray-400 text-sm">
                {content.relatedPosts?.gratitudeDesc || "Learn the simple practice of gratitude journaling →"}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
