const COMMENTS_STORAGE_PREFIX = 'bleakbot_comments_';
const INQUIRIES_STORAGE_KEY = 'bleakbot_inquiries';

export async function fetchCommentsBySlug(slug, initialComments = []) {
  try {
    const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.comments)) return data.comments;
    }
  } catch {
    // Fallback to localStorage when running as static SPA on Hostinger
  }

  try {
    const saved = window.localStorage.getItem(COMMENTS_STORAGE_PREFIX + slug);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return [...initialComments, ...parsed];
    }
  } catch {
    // ignore storage errors
  }
  return initialComments;
}

export async function postCommentForSlug(slug, commentPayload) {
  const newComment = {
    id: 'c-' + Date.now(),
    author: commentPayload.author.trim(),
    location: commentPayload.location?.trim() || 'US Homeowner',
    date: new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    text: commentPayload.text.trim(),
  };

  try {
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, ...newComment }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.comment) return data.comment;
    }
  } catch {
    // Fallback to localStorage
  }

  try {
    const existingRaw = window.localStorage.getItem(COMMENTS_STORAGE_PREFIX + slug);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.push(newComment);
    window.localStorage.setItem(COMMENTS_STORAGE_PREFIX + slug, JSON.stringify(existing));
  } catch {
    // ignore storage errors
  }

  return newComment;
}

export async function submitInquiryForm(formPayload) {
  const record = {
    id: 'inq-' + Date.now(),
    submittedAt: new Date().toISOString(),
    ...formPayload,
  };

  try {
    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    });
    if (res.ok) {
      return { ok: true, data: await res.json() };
    }
  } catch {
    // Fallback to localStorage
  }

  try {
    const existingRaw = window.localStorage.getItem(INQUIRIES_STORAGE_KEY);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.push(record);
    window.localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // ignore storage errors
  }

  return { ok: true, data: record };
}
