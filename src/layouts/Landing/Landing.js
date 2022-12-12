import { AppBar, Toolbar  ,Typography, Box, Grid, Stack, Divider, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import geyserPic from '../../assets/5.png'
import logo from '../../assets/geysital.jpg'
import Features from '../../views/Features'
import Contact from '../../views/Contact'
import { useSelector } from 'react-redux'
import Gradients from '../../Gradients'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root:{
        // padding: theme.spacing(3)
        background:'#ffffff',
        height:'100vh',
        marginTop:'-2rem',
      
    },
    btn : {
      marginTop:'3rem', 
      backgroundColor:'#fff', 
      color:'#000', 
      borderRadius:'15px',
      '&:hover' : {
        background:'#000',
        color:'#fff'
      }
    }
}))
const Landing = () => {
    const classes = useStyles()
   
    const user = useSelector((state)=> state.auth.isAuthenticated)
    console.log(user)
  return (
    <Page
    title="Welcome To Website"
  
    >
      <Nav/>
      <Box id="landing"  style={{height:'100vh', backgroundImage: Gradients.indigo, display:'flex', justifyContent:'center', alignItems:'center'  }}>
      <Box style={{padding:'6rem'}}>

      <Typography style={{fontSize:'5rem', fontFamily:'Kaushan Script', color:'#fff'}}>
        Rubitron IoT Dashboard
      </Typography>
      <Typography style={{fontSize:'1.05rem', fontfamily:'Francois One', color:'#fff',  }}>
      A professionally Built dashboard that is developed with one common goal in mind, to help you monitor your 
      IoT devices with ease.Built with the latest UI / UX technologies. 
      </Typography>
      <Button className={classes.btn} variant='contained'
      component ={Link}
      to= {user ? '/home' : '/auth/login' }
      
      >
        Get Started Now 
      </Button>
      </Box>
      </Box>
      {/* <Grid container   id="landing">
        <Grid item
        lg={6}
        xl={6}
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        > 
        <Stack>
        <Typography
        style={{fontSize:'3.5rem',
        fontFamily:'Francois One',
        
      }}
    
        >
          Smarten
        </Typography>
        <Typography
        style={{marginTop:'-5%',
        fontSize:'2rem',
        fontFamily:'Francois One',
      }}
        > Your Geyser With</Typography>
        <Typography
        style={{
          fontFamily:'Kaushan Script',
          fontSize:'7rem',
          color:'#A4182C',
          fontWeight:'bold',
          marginTop:'-10%',


        }}
        >
          Geysital
        </Typography>
        <Divider sx={{
          marginTop:'1%',
          borderWidth:'1px',
          borderRadius:'10px',
          background:'#a4182c'
        }} /> 
        

        </Stack>
      
        
        </Grid>
        <Grid item
        className={classes.root}
        lg={6}
        xl={6}
        > 
          <div style={{background:'#1E85CE', height:'100vh', width:'100%',
            borderRadius:'0%  0px 0px 70%',
            boxShadow:'10px 10px 10px black'
            
            
          }}>

            <div style={{
              background:'#ffffff',
              height:'200px',
              width:'200px',
              clipPath: 'circle(100px at 30% 30%)',
              background: 'linear-gradient(180deg, #0A5EDB 0%, rgba(10, 94, 219, 0) 80%)',
              boxShadow:'10px 10px 10px #ffffff'
            }}>

            </div>
            <div style={{marginTop:'-20%', display:'flex', justifyContent:'center'}}>


           <img alt='logo' src={geyserPic} />
              
            </div>
            </div>
        </Grid>

      </Grid>
       <Features /> 
       <Contact />  */}
          <Features /> 
       <Contact />
           
     

          
        
    </Page>
  )
}

export default Landing
