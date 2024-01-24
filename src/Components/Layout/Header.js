import React, { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, Divider } from '@mui/material';
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from "react-router-dom";
import '../../styles/HeaderStyles.css'
import logo from '../../images/logo.svg'


const Header = () => {
  const [mobileopen, setMobileopen] = useState(false)


  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={"gold"}
        variant='h6'
        component="div"
        sx={{ flexGrow: 1 }}>

        <img src={logo} alt='logo' height={"70"} width="200" />

      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  )



  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" }, }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"gold"}
              variant='h6'
              component="div"
              sx={{ flexGrow: 1 }}>
              <img src={ logo } alt='logo' height={"70"} width="250" />
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/Contact'}>Contact</NavLink>
                </li>

              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header