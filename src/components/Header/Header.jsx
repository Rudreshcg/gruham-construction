import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, List, ListItem, ListItemText, Divider, Box, Collapse, useMediaQuery, useTheme, MenuItem, Menu } from '@mui/material';
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

  const toggleDrawer = (e) => {
    setDrawerOpen(Boolean(drawerOpen)?!drawerOpen:e.currentTarget);
    Boolean(e.target.name)&&setSelectedTab(e.target.name);
  };

  const tabHandler =(value) =>{
    setSelectedTab(value)
  }

  const tabMenu = [{tabName:'HOME', to:'/'}, {tabName:'ABOUT', to:'/about'}, {tabName:'CAREERS', to:'/careers'}, {tabName:'BLOGS', to:'/blogs'}, {tabName:'CONTENT', to:'/content'}]

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

      <Menu anchorEl={drawerOpen}
      open={Boolean(drawerOpen)}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={toggleDrawer}>
          {tabMenu.map((tab)=>(<MenuItem button component={RouterLink} to={tab.to} sx={{
                    color:seletedTab===tab.tabName?'#C2B280': '#4A4A4A',
                    width:'100vw',
                    // p: "16px 24px",
                    '&:hover': {
                      color: '#C2B280',
                      backgroundColor: 'inherit'
                    }
                  }} 
                  name={tab.tabName} onClick={toggleDrawer}>
                  {tab.tabName}
                </MenuItem>))}
      </Menu>

      {/* <Box sx={{ marginTop: drawerOpen ? '32vh' : 0 }}>
      </Box> */}
    </>
  );
};

export default Header;
