import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import './BlogsSection.css';

// Construction industry blog posts with SEO-friendly content
const blogPosts = [
  {
    id: 1,
    title: "10 Modern Luxury Villa Design Trends in 2025",
    summary: "Explore the top villa construction trends shaping premium residences this year, from smart automation to eco-friendly materials. Discover how modern construction techniques are transforming luxury home building in Bangalore.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    date: "January 15, 2025",
    category: "Design",
    slug: "modern-luxury-villa-design-trends-2025",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How to Ensure On-Time Project Delivery in Construction",
    summary: "Discover proven project management techniques to keep your construction schedule on track. Learn from industry experts about effective planning, resource management, and communication strategies for successful project completion.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    date: "January 10, 2025",
    category: "Project Management",
    slug: "on-time-project-delivery-construction",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Sustainable Building Materials: What's New in 2025?",
    summary: "See how the latest green materials and techniques are making modern homes more energy-efficient and healthy. Explore eco-friendly construction options that reduce environmental impact while maintaining quality and durability.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    date: "January 5, 2025",
    category: "Sustainability",
    slug: "sustainable-building-materials-2025",
    readTime: "9 min read"
  },
  {
    id: 4,
    title: "A Complete Guide to Choosing the Right Construction Contractor",
    summary: "Tips from industry experts on vetting bids, checking credentials, and selecting the right builder for your next project. Learn what questions to ask and what red flags to watch for when hiring a construction company.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f053957?w=800&h=600&fit=crop",
    date: "December 28, 2024",
    category: "Advice",
    slug: "choosing-right-construction-contractor",
    readTime: "11 min read"
  },
  {
    id: 5,
    title: "Interior Design Trends for Modern Indian Homes in 2025",
    summary: "Discover the latest interior design trends that are transforming modern Indian homes. From minimalist aesthetics to traditional fusion, explore design ideas that create beautiful, functional living spaces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    date: "December 20, 2024",
    category: "Interior Design",
    slug: "interior-design-trends-indian-homes-2025",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Budget Planning for Your Dream Home Construction",
    summary: "Learn how to create a realistic construction budget and avoid common cost overruns. Get expert advice on planning, estimating, and managing expenses throughout your home building project.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    date: "December 15, 2024",
    category: "Planning",
    slug: "budget-planning-dream-home-construction",
    readTime: "10 min read"
  },
  {
    id: 7,
    title: "Smart Home Technology Integration in New Construction",
    summary: "Explore how smart home technology is being integrated into modern construction projects. Learn about automation systems, energy management, and security features that enhance home living.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    date: "December 10, 2024",
    category: "Technology",
    slug: "smart-home-technology-construction",
    readTime: "8 min read"
  },
  {
    id: 8,
    title: "Understanding Building Permits and Regulations in Bangalore",
    summary: "Navigate the complex world of building permits and regulations in Bangalore. Get essential information about required documentation, approval processes, and compliance requirements for construction projects.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    date: "December 5, 2024",
    category: "Legal",
    slug: "building-permits-regulations-bangalore",
    readTime: "12 min read"
  },
  {
    id: 9,
    title: "Quality Control in Construction: Best Practices",
    summary: "Learn about essential quality control measures that ensure your construction project meets the highest standards. Discover inspection protocols, material testing, and quality assurance techniques used by professional builders.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f053957?w=800&h=600&fit=crop",
    date: "November 28, 2024",
    category: "Quality",
    slug: "quality-control-construction-best-practices",
    readTime: "9 min read"
  }
];

function BlogsSection() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <section className="blogs-section">
        <div className="blogs-header">
          <h2 className="blogs-title">Construction Blog & Insights</h2>
          <p className="blogs-subtitle">Expert tips, design trends, and industry insights to help you plan and build your dream project</p>
          
          {/* Filter Buttons */}
          <div className="blogs-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className={`blogs-grid ${isVisible ? 'visible' : ''}`}>
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="blogs-item"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <BlogCard
                image={post.image}
                title={post.title}
                summary={post.summary}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                onReadMore={() => navigate(`/blogs/${post.slug}`)}
              />
            </div>
          ))}
        </div>
      </section>
  );
}

export default BlogsSection;

