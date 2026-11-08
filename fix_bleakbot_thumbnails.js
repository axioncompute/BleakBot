/**
 * fix_bleakbot_thumbnails.js
 * 
 * Run with: node fix_bleakbot_thumbnails.js
 * 
 * 1. Checks every post-*.js file in src/data/blogs/.
 * 2. If thumbnailRemote is empty, extracts the first <img> tag from htmlContent or searches WP media.
 * 3. Normalizes all thumbnail paths so they point to downloaded local assets (/assets/blog/thumb-*.webp).
 * 4. Downloads the official site icon: https://bleakbot.in/wp-content/uploads/2026/04/logo-of-bleak.webp
 *    and saves it to public/favicon.webp, public/assets/logo.webp, and public/assets/logo-of-bleak.webp.
 * 5. Generates fix_thumbnails.bat to download any missing post thumbnails via curl.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(__dirname, 'src', 'data', 'blogs');
const THUMBS_DIR = path.join(__dirname, 'public', 'assets', 'blog');
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

fs.mkdirSync(BLOGS_DIR, { recursive: true });
fs.mkdirSync(THUMBS_DIR, { recursive: true });
fs.mkdirSync(ASSETS_DIR, { recursive: true });

async function run() {
  console.log('==================================================');
  console.log('🔧 Fixing BleakBot.in Missing Thumbnails & Site Icon');
  console.log('==================================================\n');

  // 1. Download official site icon
  const siteIconUrl = 'https://bleakbot.in/wp-content/uploads/2026/04/logo-of-bleak.webp';
  console.log(`🌐 1/3: Downloading site icon: ${siteIconUrl}...`);
  try {
    const res = await fetch(siteIconUrl);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(ASSETS_DIR, 'logo-of-bleak.webp'), buf);
      fs.writeFileSync(path.join(ASSETS_DIR, 'logo.webp'), buf);
      fs.writeFileSync(path.join(__dirname, 'public', 'favicon.webp'), buf);
      console.log('   ✓ Saved to public/assets/logo-of-bleak.webp, public/assets/logo.webp, and public/favicon.webp');
    } else {
      console.warn(`   ⚠️ Site icon HTTP ${res.status}`);
    }
  } catch (err) {
    console.warn(`   ⚠️ Could not download site icon: ${err.message}`);
  }

  // 2. Scan and fix all post-*.js files
  console.log('\n🔍 2/3: Checking all post files in src/data/blogs/ ...');
  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.startsWith('post-') && f.endsWith('.js'));
  console.log(`   Found ${files.length} blog post files.`);

  const curlCommands = ['@echo off', 'echo Downloading missing blog thumbnails...'];
  let fixedCount = 0;

  for (const filename of files) {
    const filePath = path.join(BLOGS_DIR, filename);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Parse JSON object out of `const post = { ... };`
    const jsonMatch = content.match(/const\s+post\s*=\s*(\{[\s\S]*\});?\s*(?:export\s+default\s+post;)?/);
    if (!jsonMatch) continue;

    let post;
    try {
      post = JSON.parse(jsonMatch[1]);
    } catch {
      continue;
    }

    let changed = false;
    const orderStr = String(post.order || 1).padStart(2, '0');
    const slug = post.slug;

    // Check if thumbnailRemote is missing or empty
    if (!post.thumbnailRemote || post.thumbnailRemote.trim() === '') {
      // Look for first <img> inside htmlContent
      const imgMatch = post.htmlContent?.match(/<img[^>]+src=["'](https?:\/\/[^"']+)["']/i);
      if (imgMatch && imgMatch[1]) {
        post.thumbnailRemote = imgMatch[1];
        changed = true;
        console.log(`   ✓ Found image inside body for [${orderStr}] ${post.title.slice(0, 35)}...`);
      }
    }

    // Known specific fixes for the 8 mentioned articles if remote was missing in WP media table:
    const specificImageMap = {
      'best-backup-power-for-louisiana-homeowners-life-after-ida-taught-me-something': 'https://bleakbot.in/wp-content/uploads/2026/06/Power-backup-buying-guide-for-homeowners.webp',
      'ecoflow-delta-2-vs-jackery-1000-plus': 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-vs-Jackery-1000-Plus.webp',
      'ecoflow-delta-2-review': 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-review.webp',
      'ecoflow-delta-2-review-honest': 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-review.webp',
      'ecoflow-delta-2-max-review': 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-Max-review.webp',
      'ecoflow-delta-2-max-review-worth-upgrade': 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-Max-review.webp',
      'bluetti-ac180-review': 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC180-power-station-review.webp',
      'bluetti-ac180-review-home-backup': 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC180-power-station-review.webp',
      'bluetti-ac60-review': 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC60-review.webp',
      'bluetti-ac60-review-honest': 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC60-review.webp',
      'anker-solix-c800-review': 'https://bleakbot.in/wp-content/uploads/2026/07/Anker-SOLIX-C800-review.webp',
      'anker-solix-c800-review-honest': 'https://bleakbot.in/wp-content/uploads/2026/07/Anker-SOLIX-C800-review.webp',
      'goal-zero-yeti-1500x-review': 'https://bleakbot.in/wp-content/uploads/2026/07/ChatGPT-Image-Jul-10-2026-08_57_39-PM.webp',
      'goal-zero-yeti-1500x-review-2026': 'https://bleakbot.in/wp-content/uploads/2026/07/ChatGPT-Image-Jul-10-2026-08_57_39-PM.webp'
    };

    if (specificImageMap[slug] && (!post.thumbnailRemote || post.thumbnailRemote.trim() === '')) {
      post.thumbnailRemote = specificImageMap[slug];
      changed = true;
    }

    // Ensure thumbnail points to a clean local file path
    if (post.thumbnailRemote && post.thumbnailRemote.trim() !== '') {
      const ext = path.extname(new URL(post.thumbnailRemote).pathname) || '.webp';
      const localFilename = `thumb-${orderStr}-${slug}${ext}`;
      const localRelPath = `/assets/blog/${localFilename}`;

      if (post.thumbnail !== localRelPath) {
        post.thumbnail = localRelPath;
        changed = true;
      }

      // Add to curl batch
      curlCommands.push(`curl -L -s "${post.thumbnailRemote}" -o "public\\assets\\blog\\${localFilename}"`);
    }

    if (changed) {
      const updatedCode = `// Modular Blog Post File: ${filename}\n// Auto-exported from WordPress REST API (bleakbot.in)\n\nconst post = ${JSON.stringify(post, null, 2)};\n\nexport default post;\n`;
      fs.writeFileSync(filePath, updatedCode, 'utf-8');
      fixedCount++;
    }
  }

  // 3. Write batch script
  console.log(`\n📝 3/3: Updated ${fixedCount} post files with proper image paths.`);
  curlCommands.push('echo Done! All missing thumbnails have been downloaded into public/assets/blog/');
  fs.writeFileSync(path.join(__dirname, 'fix_thumbnails.bat'), curlCommands.join('\r\n'), 'utf-8');

  console.log(`   ✓ Created fix_thumbnails.bat with ${curlCommands.length - 2} image download commands.\n`);
  console.log('==================================================');
  console.log('✅ COMPLETE! Run: fix_thumbnails.bat in your terminal.');
  console.log('==================================================\n');
}

run().catch(console.error);