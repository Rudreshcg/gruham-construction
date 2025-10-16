import React from "react";
import { Box, Typography, Grid, Card, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { FadeIn } from "../../animation/animate";
import { brandColors, typography, spacing, shadows, borderRadius } from "../../theme/designSystem";

const teamMembers = [
  { name: "Member 1", role: "CEO", photo: "/images/team/member1.jpg" },
  { name: "Member 2", role: "CTO", photo: "/images/team/member2.jpg" },
  { name: "Member 3", role: "Project Manager", photo: "/images/team/member3.jpg" },
  { name: "Member 4", role: "Lead Designer", photo: "/images/team/member4.jpg" },
  { name: "Member 5", role: "Senior Engineer", photo: "/images/team/member5.jpg" },
  { name: "Member 6", role: "Marketing Head", photo: "/images/team/member6.jpg" },
  { name: "Member 7", role: "Sales Manager", photo: "/images/team/member7.jpg" },
  { name: "Member 8", role: "Customer Support", photo: "/images/team/member8.jpg" },
];

const Team = () => {
  return (
    <motion.div
      variants={FadeIn(0.5)}
      initial="initial"
      whileInView="animate"
      style={{ marginTop: spacing.xxl, marginBottom: spacing.xxl }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: typography.fontFamily.heading,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          color: brandColors.secondary,
          textAlign: "center",
          mb: spacing.md,
          fontWeight: typography.fontWeight.bold,
          letterSpacing: typography.letterSpacing.heading,
          lineHeight: 1.2,
        }}
      >
        Meet Our Team
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: brandColors.text.secondary,
          textAlign: "center",
          mb: spacing.xl,
          maxWidth: 800,
          mx: "auto",
          fontFamily: typography.fontFamily.body,
          fontSize: { xs: "0.95rem", md: "1.15rem" },
          fontWeight: typography.fontWeight.regular,
          letterSpacing: typography.letterSpacing.body,
          lineHeight: 1.6,
          px: { xs: 2, sm: 0 },
        }}
      >
        Our dedicated team brings expertise and passion to every project.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 2,
                boxShadow: shadows.small,
                borderRadius: borderRadius.medium,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: brandColors.primary,
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {member.name.split(" ").map(n => n[0]).join("")}
                </Avatar>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mt: 0,
                  fontWeight: typography.fontWeight.semiBold,
                  color: brandColors.secondary,
                  fontFamily: typography.fontFamily.heading,
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: brandColors.text.secondary,
                  fontFamily: typography.fontFamily.body,
                }}
              >
                {member.role}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Team;
