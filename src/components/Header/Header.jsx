import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Divider,
  Box,
  useMediaQuery,
  useTheme,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink, useParams } from "react-router-dom";
import { styled } from "@mui/system";
import Logo from "../../assets/images/Logo.png";

// Desktop nav only shows at lg (1200px+) to avoid overflow on tablets
const DesktopMenu = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
  },
}));

const Header = () => {
  const theme = useTheme();
  const params = useParams();

  // Show hamburger for everything below lg (1200px)
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const tabMenu = [
    { tabName: "HOME", to: "/" },
    { tabName: "OUR STORY", to: "/about" },
    { tabName: "PORTFOLIO", to: "/portfolio" },
    { tabName: "TEAMS", to: "/teams" },
    { tabName: "PUBLICATIONS", to: "/publications" },
    { tabName: "BLOGS", to: "/blogs" },
    { tabName: "CAREERS", to: "/careers" },
    { tabName: "CONTACT", to: "/contact" },
  ];

  const isActive = (to) =>
    (params["*"] === "" && to === "/") ||
    (params["*"] !== "" && to.includes(params["*"]));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: isTabletOrMobile && drawerOpen ? "black" : "white",
          color: "#595959",
          width: "100%",
          overflowX: "hidden",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            minHeight: "80px !important",
            px: { xs: 2, sm: 3, md: 4 },
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="Gruham's Construction - Leading Construction Company in Bangalore"
                style={{ height: "56px", width: "auto", display: "block" }}
              />
            </RouterLink>
          </Box>

          {/* Desktop / large screen nav */}
          <DesktopMenu>
            {tabMenu.map((tab) => (
              <Button
                key={tab.to}
                color="inherit"
                component={RouterLink}
                to={tab.to}
                sx={{
                  color: isActive(tab.to) ? "#C2B280" : "#4A4A4A",
                  px: "14px",
                  py: "8px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                  "&:hover": {
                    color: "#C2B280",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {tab.tabName}
              </Button>
            ))}
            <Button
              color="inherit"
              component="a"
              href="https://gruhams.construct.sevenr.in"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ml: 1.5,
                color: "#bfa974",
                border: "1px solid #bfa974",
                borderRadius: "4px",
                px: "14px",
                py: "7px",
                fontSize: "0.78rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#bfa974",
                },
              }}
            >
              CRM LOGIN
            </Button>
          </DesktopMenu>

          {/* Hamburger — visible on everything below lg */}
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              display: { xs: "flex", lg: "none" },
              color: drawerOpen ? "white" : "#2c2c2c",
              pr: 0,
            }}
          >
            {drawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: "100%" }} />
      </AppBar>

      {/* Mobile / tablet full-screen drawer */}
      {drawerOpen && (
        <Box
          sx={{
            backgroundColor: "#111",
            width: "100%",
            height: "100vh",
            zIndex: 1200,
            position: "fixed",
            top: 0,
            left: 0,
            overflowY: "auto",
            pt: "80px", // offset for the AppBar height
          }}
        >
          {/* Close button inside drawer */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
              borderBottom: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "#111",
            }}
          >
            <RouterLink to="/" onClick={closeDrawer} style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="Gruham's Logo"
                style={{ height: "50px", width: "auto", filter: "brightness(10)" }}
              />
            </RouterLink>
            <IconButton onClick={closeDrawer} sx={{ color: "white" }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>

          {tabMenu.map((tab) => (
            <React.Fragment key={tab.to}>
              <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <MenuItem
                component={RouterLink}
                to={tab.to}
                onClick={closeDrawer}
                sx={{
                  color: isActive(tab.to) ? "#C2B280" : "white",
                  py: 2,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  "&:hover": {
                    color: "#C2B280",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                }}
              >
                {tab.tabName}
              </MenuItem>
            </React.Fragment>
          ))}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          <MenuItem
            component="a"
            href="https://gruhams.construct.sevenr.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            sx={{
              color: "#bfa974",
              py: 2,
              px: 4,
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              "&:hover": {
                color: "#fff",
                backgroundColor: "rgba(191,169,116,0.15)",
              },
            }}
          >
            CRM LOGIN
          </MenuItem>
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        </Box>
      )}
    </>
  );
};

export default Header;
