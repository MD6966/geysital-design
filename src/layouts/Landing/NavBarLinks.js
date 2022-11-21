import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist'
import { HashLink } from 'react-router-hash-link';

const NavBarLinks = () => {

  return (
    <div>
      <Button variant='standard'

      > 
      <HashLink to='#landing' smooth style={{textDecoration:'none', color:'inherit'}}>
      <Typography style={{
        fontFamily:'Francois One',
      }}> Home</Typography>
      </HashLink>
      </Button>
      <Button variant='standard'
      > 
      <HashLink to='#features' smooth style={{textDecoration:'none', color:'inherit'}}>

      <Typography style={{
        fontFamily:'Francois One',
      }}> Features</Typography>
      </HashLink>
      </Button>
      <Button variant='standard'
      > 
      <HashLink to='#contact' smooth style={{textDecoration:'none', color:'inherit'}}>

      <Typography style={{
        fontFamily:'Francois One',
      }}> Contact</Typography>
      </HashLink>
      </Button>
       <Button 
       sx={{
        border:'2px solid white',
        color:'#ffffff',
        borderRadius:'5px'
       }}
      component={Link}
      to='/auth/login'
      > 
      <Typography style={{
      fontFamily:'Francois One',
    }}> Login</Typography>
      </Button>
      
    </div>
  )
}

export default NavBarLinks
