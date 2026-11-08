import { BLOG_CATEGORIES } from './categories';

// Vite automatically collects every post-*.js file inside src/data/blogs/
// Whenever you add a new post-XX-my-article.js file into this folder, it appears on the website automatically!
const postModules = import.meta.glob('./post-*.js', { eager: true });

export const BLOG_POSTS = Object.values(postModules)
  .map((mod) => mod.default || mod.post)
  .filter(Boolean)
  .sort((a, b) => (a.order || 999) - (b.order || 999));

export { BLOG_CATEGORIES };
