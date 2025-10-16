import { Helmet } from 'react-helmet-async';

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
  const defaultOgImage = "https://gruham.in/src/assets/images/Logo.png";
  const siteUrl = "https://gruham.in";

  const finalTitle = title ? `${title} | Gruham's Construction` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
