import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import "../WhyGruham/WhyGruham.css";
import openBook from "../../assets/images/SVGIcons/OpenBookIcon.svg";
import StarHeadHuman from "../../assets/images/SVGIcons/StarHeadHuman.svg";
import NestedHumans from "../../assets/images/SVGIcons/NestedHumans.svg";
import ContactModal from "../Home/ContactModal";

export const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px",
}));

const contentWhyArr = [
  {
    icon: openBook,
    header: "Exclusive Catalogue",
    description: "300+ designs, materials, and finishes",
  },
  {
    icon: StarHeadHuman,
    header: "All Star Designers",
    description: "100+ premium homes designed",
  },
  {
    icon: NestedHumans,
    header: "Experienced Project Managers",
    description: "25+ high-end homes executed to perfection",
  },
];

const WhyGruham = () => {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasOpened) {
          setOpen(true);
          setHasOpened(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasOpened]);

  return (
    <FlexBox ref={sectionRef}>
      <ContactModal open={open} setOpen={setOpen} />
      <Typography className="luxury-text" variant="H1">
        Why Gruham?
      </Typography>
      <Grid container spacing={2}>
        {contentWhyArr.map((content, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlexBox>
              <img src={content.icon} alt={content.header} />
              <div className="header-text">{content.header}</div>
              <div className="description-text">{content.description}</div>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </FlexBox>
  );
};

export default WhyGruham;
