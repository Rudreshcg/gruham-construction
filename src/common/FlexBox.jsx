import { styled } from "@mui/material";

export const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "30px",
}));