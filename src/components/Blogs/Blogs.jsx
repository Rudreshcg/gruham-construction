import React from 'react';
import BlogsSection from './BlogsSection';
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';

// Import blog images
import villaDesignImg from '../../assets/images/blogs/villa-design.png';
import projectMgmtImg from '../../assets/images/blogs/project-management.png';
import sustainableImg from '../../assets/images/blogs/sustainable-materials.png';
import contractorImg from '../../assets/images/blogs/contractor-advice.png';
import interiorDesignImg from '../../assets/images/blogs/interior-design.png';
import budgetPlanningImg from '../../assets/images/blogs/budget-planning.png';
import buildingPermitsImg from '../../assets/images/blogs/building-permits.png';
import qualityControlImg from '../../assets/images/blogs/quality-control.png';

// Blog posts data for SEO structured data
const blogPosts = [
  {
    id: 1,
    title: "10 Modern Luxury Villa Design Trends in 2025",
    summary: "Explore the top villa construction trends shaping premium residences this year, from smart automation to eco-friendly materials. Discover how modern construction techniques are transforming luxury home building in Bangalore.",
    image: villaDesignImg,
    date: "January 15, 2025",
    category: "Design",
    slug: "modern-luxury-villa-design-trends-2025",
  },
  {
    id: 2,
    title: "How to Ensure On-Time Project Delivery in Construction",
    summary: "Discover proven project management techniques to keep your construction schedule on track. Learn from industry experts about effective planning, resource management, and communication strategies for successful project completion.",
    image: projectMgmtImg,
    date: "January 10, 2025",
    category: "Project Management",
    slug: "on-time-project-delivery-construction",
  },
  {
    id: 3,
    title: "Sustainable Building Materials: What's New in 2025?",
    summary: "See how the latest green materials and techniques are making modern homes more energy-efficient and healthy. Explore eco-friendly construction options that reduce environmental impact while maintaining quality and durability.",
    image: sustainableImg,
    date: "January 5, 2025",
    category: "Sustainability",
    slug: "sustainable-building-materials-2025",
  },
  {
    id: 4,
    title: "A Complete Guide to Choosing the Right Construction Contractor",
    summary: "Tips from industry experts on vetting bids, checking credentials, and selecting the right builder for your next project. Learn what questions to ask and what red flags to watch for when hiring a construction company.",
    image: contractorImg,
    date: "December 28, 2024",
    category: "Advice",
    slug: "choosing-right-construction-contractor",
  },
  {
    id: 5,
    title: "Interior Design Trends for Modern Indian Homes in 2025",
    summary: "Discover the latest interior design trends that are transforming modern Indian homes. From minimalist aesthetics to traditional fusion, explore design ideas that create beautiful, functional living spaces.",
    image: interiorDesignImg,
    date: "December 20, 2024",
    category: "Interior Design",
    slug: "interior-design-trends-indian-homes-2025",
  },
  {
    id: 6,
    title: "Budget Planning for Your Dream Home Construction",
    summary: "Learn how to create a realistic construction budget and avoid common cost overruns. Get expert advice on planning, estimating, and managing expenses throughout your home building project.",
    image: budgetPlanningImg,
    date: "December 15, 2024",
    category: "Planning",
    slug: "budget-planning-dream-home-construction",
  },
  {
    id: 7,
    title: "Smart Home Technology Integration in New Construction",
    summary: "Explore how smart home technology is being integrated into modern construction projects. Learn about automation systems, energy management, and security features that enhance home living.",
    image: projectMgmtImg,
    date: "December 10, 2024",
    category: "Technology",
    slug: "smart-home-technology-construction",
  },
  {
    id: 8,
    title: "Understanding Building Permits and Regulations in Bangalore",
    summary: "Navigate the complex world of building permits and regulations in Bangalore. Get essential information about required documentation, approval processes, and compliance requirements for construction projects.",
    image: buildingPermitsImg,
    date: "December 5, 2024",
    category: "Legal",
    slug: "building-permits-regulations-bangalore",
  },
  {
    id: 9,
    title: "Quality Control in Construction: Best Practices",
    summary: "Learn about essential quality control measures that ensure your construction project meets the highest standards. Discover inspection protocols, material testing, and quality assurance techniques used by professional builders.",
    image: qualityControlImg,
    date: "November 28, 2024",
    category: "Quality",
    slug: "quality-control-construction-best-practices",
  }
];

function Blogs() {
  return (
    <div>
      <SEOHead
        title="Construction Blog - Expert Tips & Insights | Gruham's Construction"
        description="Read expert construction tips, design trends, and industry insights from Gruham's Construction. Learn about home building, interior design, project management, and sustainable construction practices in Bangalore."
        keywords="construction blog, construction tips, home building advice, construction industry insights, interior design trends, construction project management, sustainable construction, building contractor blog, construction company blog Bangalore, Gruham construction blog"
        canonical="/blogs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Gruham's Construction Blog",
          "description": "Expert construction tips, design trends, and industry insights",
          "url": "https://www.gruhams.in/blogs",
          "publisher": {
            "@type": "Organization",
            "name": "Gruham's Construction",
            "url": "https://www.gruhams.in"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "datePublished": post.date,
            "image": post.image
          }))
        }}
      />
      <BlogsSection />
      <InternalLinks currentPage="blogs" />
    </div>
  );
}

export default Blogs;
