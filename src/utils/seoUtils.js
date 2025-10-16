// SEO Utility Functions

// Generate meta keywords from content
export const generateKeywords = (primaryKeywords, secondaryKeywords = []) => {
  const allKeywords = [...primaryKeywords, ...secondaryKeywords];
  return [...new Set(allKeywords)].join(', ');
};

// Generate structured data for services
export const generateServiceStructuredData = (services) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Services",
    "description": "Comprehensive construction services including home construction, commercial buildings, interior design, and renovation services in Bangalore.",
    "provider": {
      "@type": "Organization",
      "name": "Gruham's Construction",
      "url": "https://gruhams.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Generate FAQ structured data
export const generateFAQStructuredData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate project structured data
export const generateProjectStructuredData = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "creator": {
      "@type": "Organization",
      "name": "Gruham's Construction"
    },
    "dateCreated": project.dateCreated,
    "image": project.image,
    "url": project.url,
    "keywords": project.keywords
  };
};

// Generate local business structured data
export const generateLocalBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gruhams.in/#localbusiness",
    "name": "Gruham's Construction",
    "image": "https://gruhams.in/src/assets/images/Logo.png",
    "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
    "url": "https://gruhams.in",
    "telephone": "+91-8431000242",
    "email": "info@gruhams.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey No 88/1 Rampura, Viragonagar post",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560049",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "INR",
    "sameAs": [
      "https://www.facebook.com/gruhamconstruction",
      "https://www.instagram.com/gruhamconstruction",
      "https://www.linkedin.com/company/gruhamconstruction"
    ]
  };
};

// Generate review structured data
export const generateReviewStructuredData = (reviews) => {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Gruham's Construction"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text,
    "datePublished": review.date
  }));
};

// Optimize image alt text
export const optimizeImageAltText = (imageName, context = 'construction') => {
  const baseAlt = `${imageName} - Gruham's Construction`;
  const contextMap = {
    construction: `${baseAlt} - Leading Construction Company in Bangalore`,
    interior: `${baseAlt} - Interior Design Services in Bangalore`,
    renovation: `${baseAlt} - Renovation Services in Bangalore`,
    commercial: `${baseAlt} - Commercial Construction in Bangalore`
  };
  return contextMap[context] || baseAlt;
};

// Generate page title
export const generatePageTitle = (pageTitle, siteName = "Gruham's Construction") => {
  return `${pageTitle} | ${siteName}`;
};

// Generate meta description
export const generateMetaDescription = (description, maxLength = 160) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
};

// Generate canonical URL
export const generateCanonicalUrl = (path, baseUrl = 'https://gruhams.in') => {
  return `${baseUrl}${path}`;
};

// Extract keywords from text
export const extractKeywords = (text, minLength = 3) => {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length >= minLength);
  
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10)
    .map(([word]) => word);
};

export default {
  generateKeywords,
  generateServiceStructuredData,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  generateProjectStructuredData,
  generateLocalBusinessStructuredData,
  generateReviewStructuredData,
  optimizeImageAltText,
  generatePageTitle,
  generateMetaDescription,
  generateCanonicalUrl,
  extractKeywords
};
