# Bleak Bot (bleakbot.in)

> Independent Home Backup Power Testing, Blackout Wattage Sizing & Storm Readiness Blueprints by Marcus Webb (Jacksonville, FL)

Production React + Vite + Tailwind CSS web application for **[bleakbot.in](https://bleakbot.in)**.

## ✨ Key Features

- **Interactive Blackout Wattage & Surge Calculator:** Calculates net required watt-hours (including 15% inverter conversion loss) and peak starting surge watts across 8 household appliances.
- **10 Home Backup & Storm Readiness Services:** Grouped across 3 pillars (*Home Outage Sizing & Load Engineering*, *Solar Matching, UPS & Battery Rescue*, and *Regional Storm & Blackout Blueprints*).
- **Modular Collectible Blog Architecture (`src/data/blogs/`):** Every review and buying guide lives in its own standalone `post-XX-slug.js` file inside `src/data/blogs/` and is automatically collected via Vite's `import.meta.glob`.
- **12 US Storm & Grid-Outage Regional Profiles:** Tailored battery and solar advice for Florida, Texas ERCOT, Georgia, Oklahoma Tornado Alley, California PSPS, New England, and more.
- **Cyber-Grid Cyan & Storm Amber Theme:** Full Light Mode (`#F3F7F9`) & Dark Mode (`#091017`) with a minimalist Sun/Moon switch.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📦 Build for Hostinger Production (`dist/`)

```bash
npm run build
```
Upload the contents of `dist/` directly into your Hostinger `public_html/` folder.
