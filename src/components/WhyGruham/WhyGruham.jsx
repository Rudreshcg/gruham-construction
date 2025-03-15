import { Box, Grid2, styled, Typography } from "@mui/material";
import "../WhyGruham/WhyGruham.css";
import openBook from "../../assets/images/SVGIcons/OpenBookIcon.svg";
import StarHeadHuman from "../../assets/images/SVGIcons/StarHeadHuman.svg";
import NestedHumans from "../../assets/images/SVGIcons/NestedHumans.svg";

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
    description: "25+ high end homes executed to perfection",
  },
];

const WhyGruham = () => {
  return (
    <FlexBox>
      <Typography className="luxury-text" variant="H1">
        Why Gruham?
      </Typography>
      <Grid2 container>
        {contentWhyArr.map((content) => (
          <Grid2>
            <FlexBox>
              <img src={content.icon} />
              <div className="header-text">{content.header}</div>
              <div className="description-text">{content.description}</div>
            </FlexBox>
          </Grid2>
        ))}
      </Grid2>
    </FlexBox>
  );
};

export default WhyGruham;
