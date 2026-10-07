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
    color: activeFlag ? "#927944" : "#454545",
    px: "16px",
    py: "8px",
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
    minWidth: "auto",
    "&:hover": {
      color: "#927944",
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
        color: isActive([to]) ? "var(--gold-deep)" : "var(--text-primary)",
        minHeight: 68,
        py: 1.75,
        px: 4,
        fontSize: "1rem",
        fontWeight: isActive([to]) ? 700 : 600,
        letterSpacing: "0.08em",
        borderLeft: isActive([to]) ? "3px solid var(--gold)" : "3px solid transparent",
        backgroundColor: isActive([to]) ? "rgba(184,146,74,0.1)" : "transparent",
        transition: "background-color 0.2s ease, color 0.2s ease",
        "&:hover": {
          color: "var(--gold-deep)",
          backgroundColor: "rgba(184,146,74,0.1)",
        },
      }}
    >
      {name}
    </MenuItem>
  );

  const dropdownItemStyles = {
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "var(--text-primary)",
    minHeight: 48,
    py: 1.25,
    px: 3,
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "rgba(184,146,74,0.1)",
      color: "var(--gold-deep)",
    },
    "&.Mui-selected": {
      backgroundColor: "rgba(184,146,74,0.1)",
      color: "var(--gold-deep)",
      fontWeight: 700,
      "&:hover": { backgroundColor: "rgba(184,146,74,0.16)" },
    },
  };

  const menuPaperProps = {
    elevation: 0,
    sx: {
      mt: 1.5,
      minWidth: 240,
      p: 1,
      boxShadow: "0 18px 40px rgba(27,24,19,0.12)",
      borderRadius: "8px",
      border: "1px solid rgba(31,45,61,0.1)",
      backgroundColor: "var(--bg-card)",
      overflow: 'visible',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 20,
        width: 10,
        height: 10,
        bgcolor: 'var(--bg-card)',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
        borderLeft: "1px solid rgba(31,45,61,0.1)",
        borderTop: "1px solid rgba(31,45,61,0.1)",
      },
    }
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
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
            minHeight: "72px !important",
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
                style={{ height: "50px", width: "auto", display: "block" }}
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
              MenuListProps={{ onMouseLeave: handleAboutClose, sx: { py: 0 } }}
              PaperProps={menuPaperProps}
            >
              <MenuItem component={RouterLink} to="/about" onClick={handleAboutClose} selected={isActive(["/about"])} sx={dropdownItemStyles}>Our Story</MenuItem>
              <Divider sx={{ my: 0.5, mx: 2, borderColor: "rgba(184,146,74,0.18)" }} />
              <MenuItem component={RouterLink} to="/careers" onClick={handleAboutClose} selected={isActive(["/careers"])} sx={dropdownItemStyles}>Careers</MenuItem>
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
              MenuListProps={{ onMouseLeave: handleMediaClose, sx: { py: 0 } }}
              PaperProps={menuPaperProps}
            >
              <MenuItem component={RouterLink} to="/publications" onClick={handleMediaClose} selected={isActive(["/publications"])} sx={dropdownItemStyles}>Publications</MenuItem>
              <Divider sx={{ my: 0.5, mx: 2, borderColor: "rgba(184,146,74,0.18)" }} />
              <MenuItem component={RouterLink} to="/blogs" onClick={handleMediaClose} selected={isActive(["/blogs"])} sx={dropdownItemStyles}>Blogs</MenuItem>
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
                color: "#927944",
                border: "1px solid #c9ad70",
                borderRadius: "4px",
                px: "18px",
                py: "8px",
                fontSize: "0.85rem",
                fontWeight: 600,
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#c9ad70",
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
              color: "#383838",
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
            backgroundColor: "var(--bg-soft)",
            width: "100%",
            height: "100dvh",
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
              borderBottom: "1px solid var(--border-soft)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <RouterLink to="/" onClick={closeDrawer} style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="Gruham's Logo"
                style={{ height: "50px", width: "auto" }}
              />
            </RouterLink>
            <IconButton
              onClick={closeDrawer}
              aria-label="Close menu"
              sx={{
                color: "var(--text-primary)",
                border: "1px solid var(--border-soft)",
                borderRadius: "4px",
                "&:hover": {
                  color: "var(--gold-deep)",
                  backgroundColor: "rgba(184,146,74,0.1)",
                },
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("HOME", "/")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("OUR STORY", "/about")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("PORTFOLIO", "/portfolio")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("PACKAGES", "/packages")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("PUBLICATIONS", "/publications")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("BLOGS", "/blogs")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("CAREERS", "/careers")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          {generateMobileLink("CONTACT", "/contact")}
          <Divider sx={{ borderColor: "var(--border-soft)" }} />
          
          <MenuItem
            component="a"
            href="https://gruhams.construct.sevenr.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
            sx={{
              justifyContent: "center",
              color: "#fff",
              backgroundColor: "var(--gold)",
              minHeight: 52,
              mx: 3,
              my: 2.5,
              borderRadius: "4px",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              boxShadow: "0 8px 22px rgba(146,121,68,0.2)",
              transition: "all 0.25s ease",
              "&:hover": {
                color: "#fff",
                backgroundColor: "var(--gold-deep)",
                transform: "translateY(-1px)",
              },
            }}
          >
            LOGIN
          </MenuItem>
        </Box>
      )}
    </>
  );
};

export default Header;
