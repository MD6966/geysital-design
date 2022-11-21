import React from 'react'
import { Typography, Divider, Grid, Stack, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import geyserPic from '../../assets/5.png'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root:{
        // padding: theme.spacing(3)
        background:'#ffffff',
        height:'100vh',
       
      
    },

    btn : {
            marginTop:'2rem',
            borderRadius: '20px',
            backgroundColor:'#A4182C',
        '&:hover' : {
                backgroundColor:'#a3091e'
        }
    }
}))

const Welcome = () => {
    const classes = useStyles()
  return (
    <div>
      <Grid container>
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
        <Button
        variant='contained'
        className={classes.btn}
        component={Link}
        to='/dashboard'
        > Get Started Now</Button>
        

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
    </div>
  )
}

export default Welcome
