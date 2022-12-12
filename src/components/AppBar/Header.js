import { AppBar, Toolbar, Box, Typography, useScrollTrigger } from '@mui/material'
import React from 'react'
import NavBarLinks from '../../layouts/Landing/NavBarLinks'
import logo from '../../assets/rtl-logo.webp'
const Header = () => {
  const trigger = useScrollTrigger()
  return (
    <div>
      <AppBar position='fixed'
      elevation={trigger ? 10 : 5 }
      >
        <Toolbar>
            <img alt='logo' src={logo} width='150px'/> 
            <Box style={{marginLeft:'auto'}}>
            <NavBarLinks  /> 
            </Box>
        </Toolbar>
        </AppBar> 
        <Toolbar />
         
    </div>
  )
}

export default Header
