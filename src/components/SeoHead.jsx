import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function SeoHead({ title, description, schemaData }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_CONFIG.brandName} (${SITE_CONFIG.domain})`
      : `${SITE_CONFIG.brandName} — Home Backup Power Testing, Load Sizing & Outage Readiness`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    let scriptTag = document.getElementById('bleakbot-jsonld');
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'bleakbot-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, schemaData]);

  return null;
}
