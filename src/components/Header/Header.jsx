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
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useParams } from "react-router-dom";
import { styled } from "@mui/system";
import Logo from "../../assets/images/Logo.png";

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

  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Dropdown states
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [mediaAnchorEl, setMediaAnchorEl] = useState(null);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  // Dropdown handlers
  const handleAboutClick = (event) => setAboutAnchorEl(event.currentTarget);
  const handleAboutClose = () => setAboutAnchorEl(null);

  const handleMediaClick = (event) => setMediaAnchorEl(event.currentTarget);
  const handleMediaClose = () => setMediaAnchorEl(null);

  const isActive = (pathArray) => {
    const currentPath = "/" + (params["*"] || "");
    return pathArray.some(p => {
      if (p === "/") return currentPath === "/";
      return currentPath.startsWith(p);
    });
  };

  const navButtonStyles = (activeFlag) => ({
    color: activeFlag ? "#C2B280" : "#4A4A4A",
    px: "16px",
    py: "8px",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
    minWidth: "auto",
    "&:hover": {
      color: "#C2B280",
      backgroundColor: "transparent",
    },
  });

  const generateMobileLink = (name, to) => (
    <MenuItem
      key={to}
      component={RouterLink}
      to={to}
      onClick={closeDrawer}
      sx={{
        color: isActive([to]) ? "#C2B280" : "white",
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
      {name}
    </MenuItem>
  );

  const dropdownItemStyles = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#4A4A4A",
    py: 1.5,
    px: 3,
    "&:hover": {
      backgroundColor: "rgba(191, 169, 116, 0.08)",
      color: "#bfa974",
    }
  };

  const menuPaperProps = {
    elevation: 0,
    sx: {
      mt: 1.5,
      minWidth: 220,
      boxShadow: "0px 15px 40px rgba(0,0,0,0.08)",
      borderRadius: "12px",
      border: "1px solid rgba(191, 169, 116, 0.15)",
      overflow: 'visible',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 20,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
        borderLeft: "1px solid rgba(191, 169, 116, 0.15)",
        borderTop: "1px solid rgba(191, 169, 116, 0.15)",
      },
    }
  };

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
                alt="Gruham's Construction"
                style={{ height: "56px", width: "auto", display: "block" }}
              />
            </RouterLink>
          </Box>

          {/* Desktop Nav */}
          <DesktopMenu>
            <Button component={RouterLink} to="/" sx={navButtonStyles(isActive(["/"]))}>
              HOME
            </Button>

            {/* About Dropdown */}
            <Button
              onClick={handleAboutClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={navButtonStyles(isActive(["/about", "/teams", "/careers"]))}
            >
              ABOUT US
            </Button>
            <Menu
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleAboutClose}
              MenuListProps={{ onMouseLeave: handleAboutClose }}
              PaperProps={menuPaperProps}
            >
              <MenuItem component={RouterLink} to="/about" onClick={handleAboutClose} sx={dropdownItemStyles}>Our Story</MenuItem>
              <Divider sx={{ my: 0, mx: 2, borderColor: "rgba(191, 169, 116, 0.2)" }} />
              <MenuItem component={RouterLink} to="/careers" onClick={handleAboutClose} sx={dropdownItemStyles}>Careers</MenuItem>
            </Menu>

            <Button component={RouterLink} to="/portfolio" sx={navButtonStyles(isActive(["/portfolio"]))}>
              PORTFOLIO
            </Button>

            <Button component={RouterLink} to="/packages" sx={navButtonStyles(isActive(["/packages"]))}>
              PACKAGES
            </Button>

            {/* Media Dropdown */}
            <Button
              onClick={handleMediaClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={navButtonStyles(isActive(["/publications", "/blogs"]))}
            >
              MEDIA
            </Button>
            <Menu
              anchorEl={mediaAnchorEl}
              open={Boolean(mediaAnchorEl)}
              onClose={handleMediaClose}
              MenuListProps={{ onMouseLeave: handleMediaClose }}
              PaperProps={menuPaperProps}
            >
              <MenuItem component={RouterLink} to="/publications" onClick={handleMediaClose} sx={dropdownItemStyles}>Publications</MenuItem>
              <Divider sx={{ my: 0, mx: 2, borderColor: "rgba(191, 169, 116, 0.2)" }} />
              <MenuItem component={RouterLink} to="/blogs" onClick={handleMediaClose} sx={dropdownItemStyles}>Blogs</MenuItem>
            </Menu>

            <Button component={RouterLink} to="/contact" sx={navButtonStyles(isActive(["/contact"]))}>
              CONTACT
            </Button>

            <Button
              component="a"
              href="https://gruhams.construct.sevenr.in"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ml: 2,
                color: "#bfa974",
                border: "1px solid #bfa974",
                borderRadius: "4px",
                px: "18px",
                py: "8px",
                fontSize: "0.85rem",
                fontWeight: 600,
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#bfa974",
                },
              }}
            >
              LOGIN
            </Button>
          </DesktopMenu>

          {/* Hamburger (Mobile) */}
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

      {/* Mobile / Tablet Drawer */}
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
            pt: "80px",
          }}
        >
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

          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("HOME", "/")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("OUR STORY", "/about")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("PORTFOLIO", "/portfolio")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("PACKAGES", "/packages")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("PUBLICATIONS", "/publications")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("BLOGS", "/blogs")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("CAREERS", "/careers")}
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
          {generateMobileLink("CONTACT", "/contact")}
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
            LOGIN
          </MenuItem>
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        </Box>
      )}
    </>
  );
};

export default Header;
