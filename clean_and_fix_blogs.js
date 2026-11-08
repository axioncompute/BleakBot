/**
 * clean_and_fix_blogs.js
 * 
 * Run with: node clean_and_fix_blogs.js
 * 
 * 1. Restores the main website logo in public/assets/logo.webp to:
 *    https://bleakbot.in/wp-content/uploads/2026/04/cropped-logo-of-bleak.webp
 *    And keeps the zoomed-in site icon in public/favicon.webp & public/assets/logo-of-bleak.webp:
 *    https://bleakbot.in/wp-content/uploads/2026/04/logo-of-bleak.webp
 * 
 * 2. Cleans up the 15 duplicate legacy files from Step 2 (e.g. post-01-goal-zero-yeti-1500x-review.js)
 *    so only the 50 real WordPress exported files remain in src/data/blogs/.
 * 
 * 3. Patches the exact WordPress image URLs into the 6 specific posts and downloads them.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOGS_DIR = path.join(__dirname, 'src', 'data', 'blogs');
const THUMBS_DIR = path.join(__dirname, 'public', 'assets', 'blog');
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      return true;
    }
  } catch (err) {
    console.warn(`Could not download ${url}: ${err.message}`);
  }
  return false;
}

async function run() {
  console.log('====================================================');
  console.log('🧹 BleakBot Clean Up & Missing Thumbnail Fixer');
  console.log('====================================================\n');

  // 1. Separate Site Logo vs Site Icon
  console.log('🖼️ 1/3: Configuring Site Logo vs. Site Icon...');
  const mainLogoUrl = 'https://bleakbot.in/wp-content/uploads/2026/04/cropped-logo-of-bleak.webp';
  const siteIconUrl = 'https://bleakbot.in/wp-content/uploads/2026/04/logo-of-bleak.webp';

  const okLogo = await downloadFile(mainLogoUrl, path.join(ASSETS_DIR, 'logo.webp'));
  if (okLogo) console.log('   ✓ Main Site Logo saved to public/assets/logo.webp (cropped-logo-of-bleak.webp)');

  const okIcon = await downloadFile(siteIconUrl, path.join(ASSETS_DIR, 'logo-of-bleak.webp'));
  if (okIcon) {
    fs.copyFileSync(path.join(ASSETS_DIR, 'logo-of-bleak.webp'), path.join(__dirname, 'public', 'favicon.webp'));
    console.log('   ✓ Zoomed Site Icon saved to public/favicon.webp & public/assets/logo-of-bleak.webp');
  }

  // 2. Remove the 15 legacy draft files from Step 2 that don't match the 50 WordPress exports
  console.log('\n🗑️ 2/3: Cleaning up old Step 2 draft files in src/data/blogs/ ...');
  const legacyDraftFiles = [
    'post-01-goal-zero-yeti-1500x-review.js',
    'post-04-anker-solix-c800-review.js',
    'post-05-bluetti-ac60-review.js',
    'post-06-bluetti-ac180-review.js',
    'post-07-ecoflow-vs-anker.js',
    'post-08-jackery-vs-bluetti.js',
    'post-11-ecoflow-delta-2-max-review.js',
    'post-12-ecoflow-delta-2-review.js',
    'post-15-best-power-station-for-the-money.js',
    'post-16-best-backup-power-georgia.js',
    'post-17-best-backup-power-oklahoma.js',
    'post-18-ecoflow-delta-2-vs-jackery-explorer-1000-plus.js',
    'post-19-what-id-tell-every-homeowner-before-they-buy.js',
    'post-20-best-portable-power-station-under-500.js',
    'post-21-how-to-prep-backup-power-hurricane-season.js'
  ];

  let removedCount = 0;
  legacyDraftFiles.forEach(f => {
    const full = path.join(BLOGS_DIR, f);
    if (fs.existsSync(full)) {
      fs.unlinkSync(full);
      removedCount++;
    }
  });
  console.log(`   ✓ Cleaned up ${removedCount} old draft files. Only real WordPress posts remain.`);

  // 3. Patch the real images for the 6 posts
  console.log('\n🔍 3/3: Patching real WordPress thumbnail URLs for remaining posts...');

  const imageMap = {
    // 1. Louisiana
    'post-22-best-backup-power-for-louisiana-homeowners-life-after-ida-taught-me-something.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/06/Power-backup-buying-guide-for-homeowners.webp',
      localName: 'thumb-22-louisiana-backup.webp'
    },
    // 2. EcoFlow DELTA 2 vs Jackery 1000 Plus
    'post-18-ecoflow-delta-2-vs-jackery-1000-plus.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-vs-Jackery-1000-Plus.webp',
      localName: 'thumb-18-delta-2-vs-jackery-1000-plus.webp'
    },
    // 3. EcoFlow DELTA 2 Review
    'post-12-ecoflow-delta-2-review-honest.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-review.webp',
      localName: 'thumb-12-ecoflow-delta-2.webp'
    },
    // 4. EcoFlow DELTA 2 Max Review
    'post-11-ecoflow-delta-2-max-review-worth-upgrade.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/06/EcoFlow-DELTA-2-Max-review.webp',
      localName: 'thumb-11-ecoflow-delta-2-max.webp'
    },
    // 5. Bluetti AC180
    'post-06-bluetti-ac180-review-home-backup.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC180-power-station-review.webp',
      localName: 'thumb-06-bluetti-ac180.webp'
    },
    // 6. Bluetti AC60
    'post-05-bluetti-ac60-review-honest.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/07/Bluetti-AC60-review.webp',
      localName: 'thumb-05-bluetti-ac60.webp'
    },
    // 7. Anker SOLIX C800
    'post-04-anker-solix-c800-review-honest.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/07/Anker-SOLIX-C800-review.webp',
      localName: 'thumb-04-anker-solix-c800.webp'
    },
    // 8. Goal Zero Yeti 1500X
    'post-01-goal-zero-yeti-1500x-review-2026.js': {
      remote: 'https://bleakbot.in/wp-content/uploads/2026/07/ChatGPT-Image-Jul-10-2026-08_57_39-PM.webp',
      localName: 'thumb-01-goal-zero-yeti-1500x.webp'
    }
  };

  const curlList = ['@echo off', 'echo Downloading specific missing images...'];

  for (const [fname, item] of Object.entries(imageMap)) {
    const fpath = path.join(BLOGS_DIR, fname);
    if (!fs.existsSync(fpath)) continue;

    let content = fs.readFileSync(fpath, 'utf-8');
    const jsonMatch = content.match(/const\s+post\s*=\s*(\{[\s\S]*\});?\s*(?:export\s+default\s+post;)?/);
    if (!jsonMatch) continue;

    const post = JSON.parse(jsonMatch[1]);
    post.thumbnail = `/assets/blog/${item.localName}`;
    post.thumbnailRemote = item.remote;

    const updated = `// Modular Blog Post File: ${fname}\n// Auto-exported from WordPress REST API (bleakbot.in)\n\nconst post = ${JSON.stringify(post, null, 2)};\n\nexport default post;\n`;
    fs.writeFileSync(fpath, updated, 'utf-8');

    curlList.push(`curl -L -s "${item.remote}" -o "public\\assets\\blog\\${item.localName}"`);
    console.log(`   ✓ Patched ${fname} -> /assets/blog/${item.localName}`);
  }

  curlList.push('echo Done! All missing images downloaded.');
  fs.writeFileSync(path.join(__dirname, 'download_final_images.bat'), curlList.join('\r\n'), 'utf-8');

  console.log('\n====================================================');
  console.log('✅ Generated download_final_images.bat');
  console.log('Run: download_final_images.bat in your terminal to complete!');
  console.log('====================================================\n');
}

run().catch(console.error);