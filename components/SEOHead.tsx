import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = 'Cynea AI - AI Solutions for Emerging Market SMEs & Global Enterprise',
  description = 'Leading AI solutions provider bridging UK and emerging markets. Offering AI automation, blockchain compliance, digital finance, and data analytics for SMEs, corporates, and government entities across Africa and beyond.',
  keywords = 'AI solutions UK, emerging markets AI, artificial intelligence Africa, AI automation, blockchain compliance, EUDR compliance, digital finance, data analytics, SME technology, government AI training, Kenya AI, Zambia AI, Uganda AI',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Set or update meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);

    // Open Graph tags
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:image', ogImage, 'property');
    setMetaTag('og:site_name', 'Cynea AI', 'property');
    setMetaTag('og:locale', 'en_GB', 'property');

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:site', '@CyneaAI'); // Update with actual Twitter handle if available

    // Canonical URL
    if (canonicalUrl) {
      setLinkTag('canonical', canonicalUrl);
    }

    // Robots meta tag
    if (noindex) {
      setMetaTag('robots', 'noindex,nofollow');
    } else {
      setMetaTag('robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    }

    // Additional SEO tags
    setMetaTag('author', 'Cynea AI');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#050505'); // Deep space background color
    setMetaTag('color-scheme', 'dark light');

    // Language and geographic targeting
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'GB');
    setMetaTag('geo.placename', 'London');

    // Mobile app meta tags
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'Cynea AI');

    // Security and content policy
    setMetaTag('referrer', 'origin-when-cross-origin');
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, noindex]);

  return null; // This component doesn't render anything
}

// Helper function to set meta tags
function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

// Helper function to set link tags
function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

// SEO-optimized schema.org structured data
export function addStructuredData(type: string, data: Record<string, any>) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  });

  // Remove existing structured data of the same type
  const existing = document.querySelector(
    `script[type="application/ld+json"]`
  );
  if (existing) {
    existing.remove();
  }

  document.head.appendChild(script);
}

// Helper to add organization structured data
export function addOrganizationSchema() {
  addStructuredData('Organization', {
    name: 'Cynea AI',
    url: 'https://cynea.ai',
    logo: 'https://cynea.ai/logo.png',
    description: 'Leading AI solutions provider bridging UK and emerging markets with AI automation, blockchain compliance, and digital finance services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5 Merchant Square',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7469-721021',
      contactType: 'customer service',
      email: 'irene@cynea.ai',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/cynea-africa',
      // Add other social media URLs
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Country', name: 'Uganda' },
      { '@type': 'Country', name: 'Zambia' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Blockchain Technology',
      'Digital Finance',
      'Data Analytics',
      'EUDR Compliance',
      'Government AI Training',
      'SME Technology Solutions',
    ],
  });
}

// Helper to add website structured data
export function addWebsiteSchema() {
  addStructuredData('WebSite', {
    url: 'https://cynea.ai',
    name: 'Cynea AI',
    description: 'AI solutions for emerging market SMEs and global enterprise',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://cynea.ai/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  });
}
