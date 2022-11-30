import { Box, Card, Container, Divider, Grid, Hidden, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Page from '../components/page/page'
import Gradients from '../Gradients'
import SignUpForm from './SignUp/SignUpForm'
import LockIcon from '@mui/icons-material/Lock';
import img1 from '../assets/5.png'
import img2 from '../assets/geysital2.png'
import img3 from '../assets/image.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import Background from '../assets/bgW.jpg'
import './App.css'
const SignUp = () => {
  const slideImages = [
    {
      url: '/images/5.png',
      height: '100%',
      width:'100%'
    },
    {
      url: '/images/geysital.jpg',
      height: '50%',
      width:'50%'
    },
  ];

  return (
    <Page
    title="Sign Up"
    >
      {/* <Box style={{position:'relative',}}>
        <Box
        style={{backgroundImage:`url(${Background})`, height:'100vh', backgroundPosition:'fixed',
        backgroundSize:'cover', backgroundRepeat:'no-repeat',
        display:'block'
      }}
        >
          <Box style={{
            position: 'absolute',
            background:'rgb(0,0,0)',
            background:'rgba(0,0,0, 0.6)',
            width:'100%',
            height:'100%'
          }}>
            <Container>
              
            <Grid container style={{marginTop:'6rem',
              background:'rgba(0,0,0,0.6)',
              height:'80vh'
            }}>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Typography style={{color:'#ffffff',
                background:'rgba(133, 185, 234, 0.5)',
                height:'80vh'
              
              }} variant='h1'> Grid 1</Typography> 
              </Grid>
              <Grid item xs={7} sm={6} md={7} lg={7} xl={7}>
              <Typography style={{color:'#ffffff'}} variant='h1'> Grid 2</Typography> 
             
                   <Box style={{height:'80vh', overflowY:'scroll'}}>
                Hello 
              <SignUpForm /> 
              
              </Box>
                    </Grid>

            </Grid>
        </Container>
               
          </Box>
        </Box>
     
      </Box> */}
    <Box >
      <Box style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
      <Card style={{height:'80vh', borderRadius:'20px', width:'70%',zIndex:'1', transform:'translate(-50%, -50%)', 
      position:'absolute', top:'50%', left:'50%', marginTop:'2rem'
    }} elevation={5}>
      <Grid container>
      <Hidden mdDown>
      <Grid item
            xs={5}
            sm={5}
            md={5}
            lg={5}
            xl={5}
         
            >
                
                <Box style={{backgroundImage:Gradients.blue, minHeight:'100vh', overflow:'hidden',}}>
                 <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                 <Box
                  style={{height:'70px', width:'70px', backgroundImage:Gradients.red, borderRadius:'20px',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
                  >
                    <LockIcon style={{fontSize:'3rem', color:'#ffffff'}} /> 

                  </Box>
                  <Typography style={{color:'#2657AA', fontFamily:'Kaushan Script',fontSize:'4rem', textShadow:'2px 2px 5px #ffffff'}} gutterBottom>
                    Sign Up
                  </Typography>
                 
                 </Box>
                 
                <Fade
                arrows= {false}
                >
                  {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{marginTop:'3rem'}}>
                <img src={slideImage.url} height={slideImage.height} width={slideImage.width} />
            </div>
          ))} 
                </Fade>
                  </Box> 
            </Grid>
           </Hidden>

            <Grid item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
            >
              <Box style={{height:'80vh', overflowY:'scroll'}}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'2rem'}}>
                <Box style={{height:'100px', width:'100px', background:'#ffffff', rotate:'45deg', boxShadow:'5px 5px 15px #4C5BB6',
                borderRadius:'10px', 
                display:'flex', justifyContent:'center', alignItems:'center'
              }}>
                <img src={img2} alt='logo' style={{rotate:'-45deg', position:'fixed'}} height='150px' />

              </Box>
              
                </Box>
                <Typography style={{fontSize:'3rem',fontFamily:'Encode Sans Semi Condensed', marginTop:'1rem',marginBottom:'-2rem', fontWeight:800}}>
                  Sign Up 
                </Typography>
                <Typography style={{fontFamily:'Encode Sans Semi Condensed', marginTop:'2rem',marginBottom:'-1rem', fontWeight:800}}>
                  Sign Up  on the internal platform
                </Typography>

              <SignUpForm /> 
           
              
              </Box>
            </Grid>

          </Grid>
        </Card>
      </Box>
    </Box>
    </Page>
  )
}

export default SignUp
