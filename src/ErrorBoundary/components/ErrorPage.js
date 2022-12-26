import { Box, Button, Card, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
import React from 'react'
import error from '../../assets/error.png'
const useStyles = makeStyles((theme)=> ({
    root: {
        height:'100vh',
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center'
    },
    btn: {
        width:'10rem', 
        borderRadius:'20px', 
        background:'#D33737',
        fontWeight:'bold',
        fontSize:'15px',
        marginTop:'3rem',
        '&:hover' : {
            background: '#962525'
        }
    }
}))

const ErrorPage = () => {
    const classes = useStyles()
  return (
    <div>
      <Card elevation={0} className={classes.root}>
        <Stack>

        <Typography sx={{fontWeight:'bold', fontSize:'10vw', color:'#d33737'}}>
            Oops...! 
        </Typography>
        <div style={{display:'flex'}}>
        <Typography sx={{fontWeight:800, fontSize:'4vw',}} >
            Error 404: 
        </Typography>
        <Typography sx={{fontSize:'4vw', ml:'1rem'}}>  Page Not found </Typography>
        </div>
        <Typography sx={{fontWeight:'bold',}}> We're sorry. the page you requested could not be found at the moment </Typography>
        <div style={{display:'flex', justifyContent:'center'}}>

        <Button variant='contained' className={classes.btn} component={Link} href='/'> 
            Go Home 
        </Button>
        </div>
       
        </Stack>
        <Box sx={{mt:'5rem'}}>
        <img src={error} /> 
        </Box>
      </Card>
      
    </div>
  )
}

export default ErrorPage
