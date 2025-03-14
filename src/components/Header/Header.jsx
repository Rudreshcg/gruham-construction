import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, List, ListItem, ListItemText, Divider, Box, Collapse, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import Logo from '../../assets/images/Logo.jpeg';

const DesktopMenu = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [seletedTab, setSelectedTab]= useState(null)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const tabHandler =(value) =>{
    setSelectedTab(value)
  }

  const tabMenu = [{tabName:'HOME', to:'/'},, {tabName:'ABOUT', to:'/about'}, {tabName:'CAREERS', to:'/careers'}, {tabName:'BLOGS', to:'/blogs'}, {tabName:'CONTENT', to:'/content'}]

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          color: '#595959',
          width: '100%',
          overflowX: 'hidden'
        }}
        elevation={0}
      >
        <Toolbar sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%', minHeight: '90px !important', paddingX: '0px', overflowX: 'hidden' }}>
          <Box sx={{ flexGrow: 1, px: 1 }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <img
                src={Logo}
                alt="My App"
                style={{ height: '60px', width: 'auto', paddingLeft: isMobile ? '12px' : '0px' }}
              />
            </RouterLink>
          </Box>
          <DesktopMenu>
            {tabMenu.map((tab)=>{
              return <Button
              key={tab.tabName}
              color="inherit"
              component={RouterLink}
              onClick={()=>tabHandler(tab.tabName)}
              to={tab.to}
              sx={{
                color:seletedTab===tab.tabName?'#C2B280': '#4A4A4A',
                p: "16px 24px",
                '&:hover': {
                  color: '#C2B280',
                  backgroundColor: 'inherit'
                }
              }}
            >
              {tab.tabName}
            </Button>
            })}
            
          </DesktopMenu>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none', paddingRight: '12px' } }}
            onClick={toggleDrawer}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
        <Divider sx={{ width: '100%' }} />
      </AppBar>

      <Collapse in={drawerOpen}>
        <Box
          sx={{
            width: '100vw',
            overflowX: 'hidden',
            position: 'absolute',
            left: 0,
            backgroundColor: 'white',
            zIndex: 1,
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <List>
            <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component={RouterLink} to="/about" onClick={toggleDrawer}>
              <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button component={RouterLink} to="/careers" onClick={toggleDrawer}>
              <ListItemText primary="CAREERS" />
            </ListItem>
            <ListItem button component={RouterLink} to="/blogs" onClick={toggleDrawer}>
              <ListItemText primary="BLOGS" />
            </ListItem>
            <ListItem button component={RouterLink} to="/contact" onClick={toggleDrawer}>
              <ListItemText primary="CONTACT" />
            </ListItem>
          </List>
        </Box>
      </Collapse>

      <Box sx={{ marginTop: drawerOpen ? '32vh' : 0 }}>
      </Box>
    </>
  );
};

export default Header;
