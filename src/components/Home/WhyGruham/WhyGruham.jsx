import { Box, Grid2, styled, Typography } from "@mui/material";
import "./WhyGruham.css";
import openBook from "../../../assets/images/SVGIcons/OpenBookIcon.svg"
import StarHeadHuman from "../../../assets/images/SVGIcons/StarHeadHuman.svg";
import NestedHumans from "../../../assets/images/SVGIcons/NestedHumans.svg";
import { FlexBox } from "../../../common/FlexBox";



const contentWhyArr = [
  {
    id:1,
    icon: openBook,
    header: "Exclusive Catalogue",
    description: "300+ designs, materials, and finishes",
  },
  {
    id:2,
    icon: StarHeadHuman,
    header: "All Star Designers",
    description: "100+ premium homes designed",
  },
  {
    id:3,
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
          <Grid2 key={content.id}>
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
