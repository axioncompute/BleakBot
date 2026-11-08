import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Zap, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogsData';
import { SITE_CONFIG } from '../config/siteConfig';
import CommentSection from '../components/CommentSection';
import SeoHead from '../components/SeoHead';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [avatarSrc, setAvatarSrc] = useState(SITE_CONFIG.founder.avatarLocal);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-display text-2xl font-bold">Article Not Found</h1>
        <p className="text-sm text-[#475569] dark:text-[#94A3B8]">
          We couldn’t find that review or guide. Browse all {BLOG_POSTS.length} load-tested articles
          in our archive below.
        </p>
        <Link to="/blog" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Reviews &amp; Guides</span>
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  function handleContentClick(e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (
      href &&
      (href.startsWith('/blog/') ||
        href.startsWith('/services') ||
        href.startsWith('/contact') ||
        href.startsWith('/about') ||
        href.startsWith('/meet-marcus'))
    ) {
      e.preventDefault();
      navigate(href);
    }
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://bleakbot.in/meet-marcus-webb-the-homeowner-running-the-tests',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bleak Bot',
      url: 'https://bleakbot.in',
    },
    description: post.excerpt,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SeoHead title={post.title} description={post.excerpt} schemaData={articleSchema} />

      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0E7490] dark:text-[#06B6D4] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Reviews &amp; Guides</span>
        </Link>
      </div>

      <article className="surface-card overflow-hidden">
        <div className="aspect-video bg-[#06121A] overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.thumbnailAlt || post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {post.categories.map((cat) => (
              <Link
                key={cat}
                to={`/blog?category=${encodeURIComponent(cat)}`}
                className="px-3 py-1 rounded-full font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]"
              >
                {cat}
              </Link>
            ))}
            <span className="inline-flex items-center gap-1 text-[#475569] dark:text-[#94A3B8]">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1 text-[#475569] dark:text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>

          {/* Author Byline with Marcus Webb Photo */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#CBDCE4] dark:border-[#22394E]">
            <Link
              to="/meet-marcus-webb-the-homeowner-running-the-tests"
              className="flex items-center gap-3 group"
            >
              <img
                src={avatarSrc}
                alt={post.author}
                onError={() => setAvatarSrc(SITE_CONFIG.founder.avatarRemote)}
                className="w-11 h-11 rounded-full object-cover border border-[#0E7490] dark:border-[#06B6D4]"
              />
              <div className="text-xs">
                <div className="font-bold group-hover:text-[#0E7490] dark:group-hover:text-[#06B6D4]">
                  By {post.author}
                </div>
                <div className="text-[#475569] dark:text-[#94A3B8]">
                  Homeowner &amp; Lead Tester in Jacksonville, FL • Published on BleakBot.in
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Verdict Box if present */}
          {post.verdict && (
            <div className="surface-subtle p-5 space-y-2 border-l-4 !border-l-[#10B981]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#10B981] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Marcus’s Lab Verdict</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">{post.verdict}</p>
            </div>
          )}

          {/* Full HTML Body */}
          <div
            className="wp-article-content"
            onClick={handleContentClick}
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-[#CBDCE4] dark:border-[#22394E] flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#0E7490] dark:text-[#06B6D4]" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium surface-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Consultation Callout Box */}
      <div className="rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-r from-[#06121A] to-[#0E3144] border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Not Sure If This Unit Will Start Your Fridge or Sump Pump?
          </div>
          <h2 className="font-display text-lg sm:text-xl font-bold">
            Book a Custom 24-Hour Appliance Wattage &amp; Surge Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Send Marcus your appliance list or dealer quote before you spend $1,000+ on the wrong battery.
          </p>
        </div>
        <Link to="/contact?service=custom-appliance-load-audit" className="btn-amber shrink-0">
          <Zap className="w-4 h-4" />
          <span>Book Load Audit</span>
        </Link>
      </div>

      {/* Reader Comments */}
      <CommentSection slug={post.slug} initialComments={post.comments || []} />

      {/* Related Reviews */}
      <section className="space-y-4">
        <h2 className="font-display text-xl font-bold">More Load-Tested Reviews &amp; Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.slug}`}
              className="surface-card p-4 space-y-2 hover:border-[#0E7490] dark:hover:border-[#06B6D4]"
            >
              <span className="text-[11px] font-bold text-[#0E7490] dark:text-[#06B6D4]">
                {rel.categories[0]}
              </span>
              <h3 className="font-display font-bold text-sm line-clamp-2">{rel.title}</h3>
              <span className="text-xs text-[#475569] dark:text-[#94A3B8] block">{rel.date}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
