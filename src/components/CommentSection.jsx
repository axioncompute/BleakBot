import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { fetchCommentsBySlug, postCommentForSlug } from '../api/client';

export default function CommentSection({ slug, initialComments = [] }) {
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchCommentsBySlug(slug, initialComments).then((list) => {
      if (mounted) setComments(list);
    });
    return () => {
      mounted = false;
    };
  }, [slug, initialComments]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    const created = await postCommentForSlug(slug, { author, location, text });
    setComments((prev) => [...prev, created]);
    setAuthor('');
    setLocation('');
    setText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="surface-card p-6 sm:p-8 space-y-6" aria-label="Reader Discussion">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <MessageSquare className="w-5 h-5 text-[#0E7490] dark:text-[#06B6D4]" />
          <h2 className="font-display text-xl font-bold">
            Homeowner Field Notes &amp; Questions ({comments.length})
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="surface-subtle p-4 space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="font-bold flex items-center gap-2">
                <span>{c.author}</span>
                {c.location && (
                  <span className="inline-flex items-center gap-1 font-medium text-[#475569] dark:text-[#94A3B8]">
                    <MapPin className="w-3 h-3" />
                    {c.location}
                  </span>
                )}
              </div>
              <span className="text-[#475569] dark:text-[#94A3B8]">{c.date}</span>
            </div>
            <p className="text-sm leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-[#CBDCE4] dark:border-[#22394E]">
        <h3 className="font-display font-bold text-base">
          Ask Marcus a Question or Share Your Runtime Results
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold mb-1">Your Name *</label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g., Mark Reynolds"
              className="w-full px-3.5 py-2 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">City &amp; State (Optional)</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Jacksonville, FL"
              className="w-full px-3.5 py-2 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Your Question or Appliance Setup *</label>
          <textarea
            rows={3}
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share what appliances you are trying to run or your experience with this power station..."
            className="w-full px-3.5 py-2 rounded-xl surface-subtle text-sm focus:outline-none focus:ring-2 focus:ring-[#0E7490]"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button type="submit" className="btn-primary">
            <Send className="w-4 h-4" />
            <span>Post Comment</span>
          </button>
          {submitted && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Your comment has been added!</span>
            </span>
          )}
        </div>
      </form>
    </section>
  );
}
