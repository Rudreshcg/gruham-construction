import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Pagination
} from "@mui/material";
import styled from "@emotion/styled";
import aboutBg from "../../assets/images/careers_bg.jpg";

import { brandColors, typography, spacing, shadows, borderRadius } from "../../theme/designSystem"; // adjust path to design system as needed

// Example static blog posts array; in real use, fetch from API or CMS
const blogPosts = [
  {
    id: 1,
    title: "10 Modern Luxury Villa Design Trends in 2025",
    summary: "Explore the top villa construction trends shaping premium residences this year, from smart automation to eco-friendly materials.",
    image: "/images/blog/villa-trends.jpg", // update paths as needed
    author: "John Doe",
    date: "July 20, 2025",
    category: "Design",
  },
  {
    id: 2,
    title: "How to Ensure On-Time Project Delivery",
    summary: "Discover proven project management techniques to keep your construction schedule on track—and your clients delighted.",
    image: "/images/blog/project-management.jpg",
    author: "Priya Shah",
    date: "July 8, 2025",
    category: "Project Management",
  },
  {
    id: 3,
    title: "Sustainable Building Materials: What’s New?",
    summary: "See how the latest green materials and techniques are making modern homes more energy-efficient and healthy.",
    image: "/images/blog/sustainable-materials.jpg",
    author: "Rahul Verma",
    date: "June 28, 2025",
    category: "Sustainability",
  },
  {
    id: 4,
    title: "A Guide to Choosing the Right Contractor",
    summary: "Tips from industry experts on vetting bids, checking credentials, and selecting the right builder for your next project.",
    image: "/images/blog/contractor-guide.jpg",
    author: "Sarah Lee",
    date: "June 15, 2025",
    category: "Advice",
  },
  // Add more posts as needed...
];

// Soft card styles for blog cards
const BlogCard = styled(Card)({
  borderRadius: borderRadius.large,
  boxShadow: shadows.medium,
  background: "#fff",
  transition: "box-shadow .19s,transform .19s",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    boxShadow: shadows.large,
    transform: "translateY(-3px) scale(1.02)",
  }
});

const Blogs = () => {
  // For pagination: assume 6 posts per page
  const postsPerPage = 6;
  const [page, setPage] = useState(1);
  const count = Math.ceil(blogPosts.length / postsPerPage);
  const paginatedPosts = blogPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  // Optional: Array of categories for filter bar
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  const [selectedCat, setSelectedCat] = useState("All");
  const filteredPosts = selectedCat === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCat);

  // Recalculate pagination if filtering
  const filteredPaginatedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);
  const filteredCount = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <Box sx={{ background: "linear-gradient(120deg,#f8f6f3 80%,#ede4ce 100%)", minHeight: "100vh", pb: spacing.xxxl }}>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          py: { xs: spacing.xxl, md: spacing.xxxl },
          backgroundImage: `url(${aboutBg})`,
          color: "#fff",
          position: "relative",
          mb: spacing.xl
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(rgba(21,28,40,.62),rgba(24,18,40,.42))",
            zIndex: 1,
          }}
        />
        <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: typography.fontWeight.bold,
              fontFamily: typography.fontFamily.heading,
              fontSize: { xs: "2.2rem", md: "3.1rem" },
              textShadow: "0 8px 22px #180d30a5",
              mb: 2,
              letterSpacing: "0.03em",
            }}
          >
            Insights & Inspiration for Better Building
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: typography.fontFamily.body,
              color: "#f6e8c2",
              opacity: 0.93,
              maxWidth: 640,
              mx: "auto",
              fontSize: { xs: "1.05rem", md: "1.18rem" }
            }}
          >
            Construction tips, ideas, and stories to help you plan your next project and understand the industry.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Category Filter Chips */}
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: spacing.xl, justifyContent: "center" }}>
          {categories.map(cat => (
            <Chip
              key={cat}
              label={cat}
              color={selectedCat === cat ? "primary" : "default"}
              sx={{
                fontWeight: selectedCat === cat ? 600 : 400,
                background: selectedCat === cat ? brandColors.primary : brandColors.background.light,
                color: selectedCat === cat ? "#fff" : brandColors.text.secondary,
                fontSize: typography.fontSize.body2,
                fontFamily: typography.fontFamily.body,
                px: 2
              }}
              clickable
              onClick={() => { setSelectedCat(cat); setPage(1); }}
            />
          ))}
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={spacing.xl}>
          {(filteredPaginatedPosts.length > 0 ? filteredPaginatedPosts : paginatedPosts).map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogCard>
                <CardMedia
                  component="img"
                  height="180"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    borderTopLeftRadius: borderRadius.large,
                    borderTopRightRadius: borderRadius.large,
                    objectFit: "cover"
                  }}
                />
                <CardContent sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      mb: 1,
                      backgroundColor: brandColors.primary,
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: typography.fontSize.caption,
                      fontFamily: typography.fontFamily.body
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: typography.fontFamily.heading,
                      fontWeight: typography.fontWeight.semiBold,
                      fontSize: "1.1rem",
                      mb: 0.8
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: typography.fontFamily.body,
                      color: brandColors.text.secondary,
                      mb: 2,
                      minHeight: "48px"
                    }}
                  >
                    {post.summary}
                  </Typography>
                  <Box sx={{ mt: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography variant="caption" sx={{ color: brandColors.text.secondary }}>
                      {post.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: brandColors.text.secondary }}>
                      • {post.date}
                    </Typography>
                  </Box>
                  {/* Button could link to a detailed blog post page */}
                  <Button variant="contained" color="primary" size="small" sx={{
                    mt: 2,
                    borderRadius: borderRadius.medium,
                    fontFamily: typography.fontFamily.body,
                    textTransform: "none",
                    px: 2.3
                  }}>
                    Read More
                  </Button>
                </CardContent>
              </BlogCard>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Controls */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: spacing.xl }}>
          <Pagination
            count={filteredCount}
            color="primary"
            page={page}
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;
