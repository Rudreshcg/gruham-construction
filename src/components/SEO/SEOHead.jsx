import { useEffect } from 'react';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  structuredData
}) => {
  const defaultTitle = "Gruham's Construction - Leading Construction Company in Bangalore | Premium Construction Services";
  const defaultDescription = "Gruham's Construction is a premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services. Get expert construction solutions with Gruham's.";
  const defaultKeywords = "construction company Bangalore, Gruham construction, Gruham's, construction services, home construction, commercial construction, interior design, renovation, building contractor, Bangalore construction, luxury construction, residential construction, architectural services, construction management";
  const defaultOgImage = "https://gruhams.in/src/assets/images/Logo.png";
  const siteUrl = "https://gruhams.in";

  const finalTitle = title ? `${title} | Gruham's Construction` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const finalOgImage = ogImage || defaultOgImage;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', href);
    };

    // Update meta tags
    updateMetaTag('title', finalTitle);
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', "Gruham's Construction");
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', finalCanonical, true);
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:image', finalOgImage, true);
    updateMetaTag('og:site_name', "Gruham's Construction", true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', finalCanonical, true);
    updateMetaTag('twitter:title', finalTitle, true);
    updateMetaTag('twitter:description', finalDescription, true);
    updateMetaTag('twitter:image', finalOgImage, true);

    // Update canonical URL
    updateLinkTag('canonical', finalCanonical);

    // Add structured data
    if (structuredData) {
      // Remove existing structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Clean up structured data script on unmount
      const script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.remove();
      }
    };
  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, ogType, structuredData]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;
