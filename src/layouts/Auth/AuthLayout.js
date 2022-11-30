import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Gradients from '../../Gradients'
import image from '../../assets/imagee.jpg'
import geysital from '../../assets/geysital.jpg'
import ParticlesContainer from '../../views/ParticlesContainer'
const AuthLayout = () => {
  return (
    <div>
   
    <ParticlesContainer /> 
      <AppBar postion='static'>
        <Toolbar>
          <img src={geysital} height='50px'/> 
          <Typography style={{fontFamily:'Kaushan script', fontSize:'2rem', marginLeft:'0.5rem'}}> Geysital </Typography>
        </Toolbar>
      </AppBar>
      <Outlet  /> 
      </div>
  )
}

export default AuthLayout
