import React, { useState } from 'react';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import { Search, ArrowRight, Tag } from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogsData';
import SeoHead from '../components/SeoHead';

export default function BlogArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Support both /blog?category=... and WordPress /category/:categorySlug routes
  let activeCategory = searchParams.get('category') || 'all';
  if (categorySlug) {
    const matched = BLOG_CATEGORIES.find((c) => c.slug === categorySlug);
    if (matched) activeCategory = matched.id;
  }

  const activeCategoryObj =
    BLOG_CATEGORIES.find((c) => c.id === activeCategory) || BLOG_CATEGORIES[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      activeCategory === 'all' || post.categories.includes(activeCategory);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <SeoHead
        title={`${activeCategoryObj.name} — Portable Power Station Tests & Guides`}
        description={activeCategoryObj.description}
      />

      {/* Archive Header */}
      <div className="surface-card p-6 sm:p-10 space-y-5">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E7490] dark:text-[#06B6D4]">
            Jacksonville, FL Testing Archive • {BLOG_POSTS.length} Modular Articles
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
            {activeCategoryObj.name}
          </h1>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] max-w-3xl">
            {activeCategoryObj.description}
          </p>
        </div>

        {/* Category Filter + Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  cat.id === 'all'
                    ? setSearchParams({})
                    : setSearchParams({ category: cat.id })
                }
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                  activeCategory === cat.id
                    ? 'btn-primary'
                    : 'surface-subtle hover:opacity-80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#475569] dark:text-[#94A3B8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search EcoFlow, Jackery, CPAP, 240V..."
              className="w-full pl-10 pr-4 py-2 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
            />
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <article key={post.id} className="surface-card overflow-hidden flex flex-col justify-between">
            <div>
              <Link to={`/blog/${post.slug}`} className="block aspect-video bg-[#06121A] overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.thumbnailAlt || post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </Link>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md font-bold surface-subtle text-[#0E7490] dark:text-[#06B6D4]">
                    {post.categories[0]}
                  </span>
                  <span className="text-[#475569] dark:text-[#94A3B8]">{post.date}</span>
                </div>
                <h2 className="font-display font-bold text-base sm:text-lg leading-snug">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-[#0E7490] dark:hover:text-[#06B6D4]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded surface-subtle text-[#475569] dark:text-[#94A3B8]"
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-bold text-[#0E7490] dark:text-[#06B6D4] inline-flex items-center gap-1 hover:underline"
              >
                <span>Read Full Load Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
