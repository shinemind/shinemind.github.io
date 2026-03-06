"use client";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { blogListingContent } from "@/lib/blog-content/blog-listing";
import DownloadButtons from "@/components/DownloadButtons";

export default function BlogPage() {
  const { language } = useLanguage();
  const content = blogListingContent[language];

  const blogPosts = [
    {
      slug: "benefits-of-daily-meditation",
      title: content.posts.meditation.title,
      excerpt: content.posts.meditation.excerpt,
      date: content.posts.meditation.date,
      readTime: content.posts.meditation.readTime,
      category: content.posts.meditation.category,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
      hoverShadow: "hover:shadow-blue-500/20",
    },
    {
      slug: "how-to-start-gratitude-journal",
      title: content.posts.gratitude.title,
      excerpt: content.posts.gratitude.excerpt,
      date: content.posts.gratitude.date,
      readTime: content.posts.gratitude.readTime,
      category: content.posts.gratitude.category,
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/50",
      hoverShadow: "hover:shadow-pink-500/20",
    },
    {
      slug: "ai-powered-wellness-tips",
      title: content.posts.ai.title,
      excerpt: content.posts.ai.excerpt,
      date: content.posts.ai.date,
      readTime: content.posts.ai.readTime,
      category: content.posts.ai.category,
      gradient: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/50",
      hoverShadow: "hover:shadow-purple-500/20",
    },
    {
      slug: "morning-routines-mental-health",
      title: content.posts.morning.title,
      excerpt: content.posts.morning.excerpt,
      date: content.posts.morning.date,
      readTime: content.posts.morning.readTime,
      category: content.posts.morning.category,
      gradient: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/50",
      hoverShadow: "hover:shadow-orange-500/20",
    },
    {
      slug: "mindfulness-busy-professionals",
      title: content.posts.mindfulness.title,
      excerpt: content.posts.mindfulness.excerpt,
      date: content.posts.mindfulness.date,
      readTime: content.posts.mindfulness.readTime,
      category: content.posts.mindfulness.category,
      gradient: "from-teal-500/20 to-emerald-500/20",
      borderColor: "border-teal-500/50",
      hoverShadow: "hover:shadow-teal-500/20",
    },
    {
      slug: "science-of-happiness",
      title: content.posts.happiness.title,
      excerpt: content.posts.happiness.excerpt,
      date: content.posts.happiness.date,
      readTime: content.posts.happiness.readTime,
      category: content.posts.happiness.category,
      gradient: "from-yellow-500/20 to-green-500/20",
      borderColor: "border-yellow-500/50",
      hoverShadow: "hover:shadow-yellow-500/20",
    },
    {
      slug: "overcoming-procrastination",
      title: content.posts.procrastination.title,
      excerpt: content.posts.procrastination.excerpt,
      date: content.posts.procrastination.date,
      readTime: content.posts.procrastination.readTime,
      category: content.posts.procrastination.category,
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/50",
      hoverShadow: "hover:shadow-red-500/20",
    },
    {
      slug: "digital-detox",
      title: content.posts.digitalDetox.title,
      excerpt: content.posts.digitalDetox.excerpt,
      date: content.posts.digitalDetox.date,
      readTime: content.posts.digitalDetox.readTime,
      category: content.posts.digitalDetox.category,
      gradient: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/50",
      hoverShadow: "hover:shadow-indigo-500/20",
    },
    {
      slug: "self-confidence-affirmations",
      title: content.posts.confidence.title,
      excerpt: content.posts.confidence.excerpt,
      date: content.posts.confidence.date,
      readTime: content.posts.confidence.readTime,
      category: content.posts.confidence.category,
      gradient: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/50",
      hoverShadow: "hover:shadow-rose-500/20",
    },
    {
      slug: "breathing-exercises",
      title: content.posts.breathing.title,
      excerpt: content.posts.breathing.excerpt,
      date: content.posts.breathing.date,
      readTime: content.posts.breathing.readTime,
      category: content.posts.breathing.category,
      gradient: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/50",
      hoverShadow: "hover:shadow-cyan-500/20",
    },
    {
      slug: "sleep-meditation",
      title: content.posts.sleepMeditation.title,
      excerpt: content.posts.sleepMeditation.excerpt,
      date: content.posts.sleepMeditation.date,
      readTime: content.posts.sleepMeditation.readTime,
      category: content.posts.sleepMeditation.category,
      gradient: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/50",
      hoverShadow: "hover:shadow-indigo-500/20",
    },
    {
      slug: "stress-management",
      title: content.posts.stressManagement.title,
      excerpt: content.posts.stressManagement.excerpt,
      date: content.posts.stressManagement.date,
      readTime: content.posts.stressManagement.readTime,
      category: content.posts.stressManagement.category,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
      hoverShadow: "hover:shadow-green-500/20",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/50">
                {content.badge}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              {content.title}{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                {content.titleHighlight}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              {content.subtitle}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article
                  className={`relative bg-gradient-to-br ${post.gradient} backdrop-blur-xl rounded-3xl p-8 border ${post.borderColor} hover:border-opacity-100 transition-all duration-500 hover:scale-[1.02] ${post.hoverShadow} hover:shadow-2xl h-full flex flex-col`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative flex-1 flex flex-col">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-white/20">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {content.ctaTitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {content.ctaSubtitle}
              </p>
              <DownloadButtons />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
