// SEO Configuration for Gruham's Construction
export const seoConfig = {
  siteName: "Gruham's Construction",
  siteUrl: "https://gruham.in",
  siteDescription: "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
  
  // Primary Keywords
  primaryKeywords: [
    "construction company Bangalore",
    "Gruham construction",
    "Gruham's",
    "construction services",
    "home construction",
    "commercial construction",
    "interior design",
    "renovation",
    "building contractor",
    "Bangalore construction",
    "luxury construction",
    "residential construction",
    "architectural services",
    "construction management"
  ],

  // Location-based keywords
  locationKeywords: [
    "construction company in Bangalore",
    "Bangalore construction services",
    "construction contractor Bangalore",
    "home construction Bangalore",
    "commercial construction Bangalore",
    "interior design Bangalore",
    "renovation services Bangalore"
  ],

  // Service-specific keywords
  serviceKeywords: {
    residential: [
      "home construction Bangalore",
      "luxury home construction",
      "residential construction services",
      "house construction Bangalore",
      "villa construction",
      "apartment construction"
    ],
    commercial: [
      "commercial construction Bangalore",
      "office construction",
      "retail construction",
      "industrial construction",
      "commercial building contractor"
    ],
    interior: [
      "interior design Bangalore",
      "home interior design",
      "office interior design",
      "interior decoration",
      "space planning"
    ],
    renovation: [
      "home renovation Bangalore",
      "office renovation",
      "building renovation",
      "remodeling services",
      "renovation contractor"
    ]
  },

  // Social media URLs (update with actual URLs)
  socialMedia: {
    facebook: "https://www.facebook.com/gruhamconstruction",
    instagram: "https://www.instagram.com/gruhamconstruction",
    linkedin: "https://www.linkedin.com/company/gruhamconstruction",
    twitter: "https://www.twitter.com/gruhamconstruction",
    youtube: "https://www.youtube.com/gruhamconstruction"
  },

  // Company information
  companyInfo: {
    name: "Gruham's Construction",
    legalName: "Gruham Construction Private Limited",
    address: {
      street: "Survey No 88/1 Rampura, Viragonagar post",
      city: "Bangalore",
      state: "Karnataka",
      postalCode: "560049",
      country: "India"
    },
    contact: {
      phone: "+91-8431000242",
      email: "info@gruham.in",
      website: "https://gruham.in"
    },
    founded: "2020",
    description: "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services."
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: "Gruham's Construction - Leading Construction Company in Bangalore",
      description: "Gruham's Construction is a premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services. Transform your vision into reality with expert construction solutions.",
      keywords: "construction company Bangalore, Gruham construction, construction services, home construction, commercial construction, interior design, renovation"
    },
    about: {
      title: "About Gruham's Construction - Leading Construction Company in Bangalore",
      description: "Learn about Gruham's Construction, a premier construction company in Bangalore. Discover our mission, values, and commitment to delivering exceptional construction services, luxury homes, and commercial buildings.",
      keywords: "about Gruham construction, construction company Bangalore, construction mission, construction values, Bangalore construction team"
    },
    services: {
      title: "Construction Services in Bangalore - Gruham's Construction",
      description: "Explore Gruham's comprehensive construction services in Bangalore. From home construction and commercial buildings to interior design and renovation services. Expert construction solutions for your project.",
      keywords: "construction services Bangalore, home construction, commercial construction, interior design, renovation services, building contractor Bangalore"
    },
    portfolio: {
      title: "Construction Portfolio - Gruham's Construction Projects in Bangalore",
      description: "Explore Gruham's construction portfolio showcasing luxury homes, commercial buildings, and interior design projects in Bangalore. View our completed construction projects and get inspired for your next project.",
      keywords: "construction portfolio Bangalore, Gruham construction projects, luxury home construction, commercial construction projects, interior design portfolio"
    },
    contact: {
      title: "Contact Gruham's Construction - Get Construction Quote in Bangalore",
      description: "Contact Gruham's Construction for your construction project in Bangalore. Get expert consultation, quotes, and project planning for home construction, commercial buildings, and renovation services.",
      keywords: "contact Gruham construction, construction quote Bangalore, construction consultation, construction planning, building contractor contact"
    }
  },

  // Structured data templates
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gruham's Construction",
      "alternateName": ["Gruham Construction", "Gruhams", "Gruham's"],
      "url": "https://gruham.in",
      "logo": "https://gruham.in/src/assets/images/Logo.png",
      "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Survey No 88/1 Rampura, Viragonagar post",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560049",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8431000242",
        "contactType": "customer service",
        "email": "info@gruham.in"
      },
      "sameAs": [
        "https://www.facebook.com/gruhamconstruction",
        "https://www.instagram.com/gruhamconstruction",
        "https://www.linkedin.com/company/gruhamconstruction"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "12.9716",
          "longitude": "77.5946"
        },
        "geoRadius": "50000"
      }
    }
  }
};

export default seoConfig;
