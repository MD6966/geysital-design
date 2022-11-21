import { AppBar, Toolbar, Box, Typography, useScrollTrigger } from '@mui/material'
import React from 'react'
import NavBarLinks from '../../layouts/Landing/NavBarLinks'
import logo from '../../assets/geysital.jpg'
const Header = () => {
  const trigger = useScrollTrigger()
  return (
    <div>
      <AppBar position='fixed'
      elevation={trigger ? 10 : 5 }
      sx={{background:trigger ? 'primary' : 'transparent'}}
      >
        <Toolbar>
            <img alt='logo' src={logo} height='50px'/>
            <Typography style={{
              marginLeft:'1%',
              color:trigger ? '#ffff'  : '#1E85CE',
              fontSize:'2.25rem',
              fontFamily:'Kaushan Script',
            }}> Geysital </Typography> 
            <Box style={{marginLeft:'auto'}}>
            <NavBarLinks  /> 
            </Box>
        </Toolbar>
        </AppBar> 
    </div>
  )
}

export default Header
