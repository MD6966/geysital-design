import { FormControl, InputLabel, InputAdornment, Select, Button, Box, Grid, Hidden, Typography, TextField, CircularProgress, Avatar, IconButton  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import './App.css'
import Page from '../components/page/page';
import Nav from '../components/AppBar/Header'
import { login } from '../store/actions';
import geysital from '../assets/geysital2.png'
import axios from 'axios'
import LoginForm from './Login/LoginForm';
import Gradients from '../Gradients';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import DialogueComponent from './Login/components/DialogueComponent';
import { useAlert } from 'react-alert'
import { auth } from '../store/actions';
import { useSnackbar } from 'notistack';
const Login = () => {
    const alert = useAlert()
  const dispatch = useDispatch()
  const [ip, setIp]=useState(null)
  const initialValues = {
    email:'',
    password: '',

  }
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
    submitError: null
  });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const token = useSelector((state)=>state.auth)
  const error = useSelector((state)=> state.auth)
  const {enqueueSnackbar} = useSnackbar()

// React.useEffect(()=>
// {
//   if(token){
//     dispatch(auth())
//   }
// })
  const isLoading = useSelector((state) => state.auth.isLoading)
 
  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((data) => {
      setIp(data.data.ip);
      
    });
  }, []);
  const [open, setOpen]= React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClose=()=> {
    setOpen(false)
  }
  const [formValues, setFormValues] = useState(initialValues) 
  const handleChange =(e) => {
    
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(login(formValues, ip)).then((res)=>
      // enqueueSnackbar(res)
      enqueueSnackbar(res.err.response.data, {
        variant:'error'
      })
      );
      setFormValues(initialValues);
  }
  const handleShowPassword =()=> {
    setShowPassword(!showPassword)
  }
  if (isAuthenticated)
   {
    return(navigate('/home'))
   }
   
  return (<Page
  title="Login"
  >
    
  
    <Box  >
      <Box className='neumorphism' style={{zIndex:'1', transform:'translate(-50%, -50%)', 
      position:'absolute', top:'50%', left:'50%', marginTop:'2rem'}}>
     <Grid container>
      <Grid item
    
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} 
      style={{padding:'2rem',backgroundColor:'#ffffff', height:'70vh', boxShadow:'2px 2px 15px #e2e2e2 inset', borderTopLeftRadius:'10px',
    
    borderBottomLeftRadius:'10px'}}
      >
        <Box style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <Box style={{height:'80px', width:'80px', background:'#ffffff', rotate:'45deg', boxShadow:'5px 5px 15px #4C5BB6',
                borderRadius:'10px', 
                display:'flex', justifyContent:'center', alignItems:'center'
              }}>
                <img src={geysital} alt='logo' style={{rotate:'-45deg', position:'fixed'}} height='110px' />

              </Box>
              
                </Box>
                <Typography style={{fontSize:'2rem',fontFamily:'Encode Sans Semi Condensed', marginTop:'1rem',marginBottom:'-2rem', fontWeight:800, }}>
                  LOG IN 
                </Typography>
        <Box style={{marginTop:'2rem', }}>
          <form onSubmit={handleSubmit}>
          <TextField 
           fullWidth
            required
           label="Email address"
           name="email"
           onChange={handleChange}
           value={formValues.email}
           variant="standard"
           style={{marginBottom:'1rem'}}
           InputProps={{
            
            startAdornment: (
              <InputAdornment position="start">
                  <Email style={{color:'#000000'}}/> 
              </InputAdornment>
            ),
          }}
          />
          <TextField 
          fullWidth
          required
          label="Password"
          name="password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          value={formState.password}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                 <Lock style={{color:'#000000'}} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility />  : <VisibilityOff/>}
                  </IconButton> 
              </InputAdornment>
            )
          }}
          
          />
          <Typography
          onClick={()=> setOpen(true)}
          style={{textAlign:'right', fontWeight:'bold', fontSize:'0.8rem', color:'#1976D1', cursor:'pointer',  
          marginTop:'0.5rem'
        }}
         
          > Forgot Password?</Typography>
          {
            isLoading ? <CircularProgress style={{marginTop:'1rem'}}  /> : 
            <Button 
            type='submit'
            variant='contained'
            style={{
              marginTop:'1rem'
            }}
            > Login</Button>
          }
          </form>
          <DialogueComponent open={open} close={handleClose} />
          {/* <LoginForm />  */}
        </Box>
        <Box style={{marginTop:'2%',}}>
          <Typography> New User? 
            <Link to='/auth/register' style={{textDecoration:'none', fontWeight:'bold', color:'#1976D2'}}> Register Here</Link>
           </Typography>
        </Box>
      </Grid>
      <Hidden smDown>
      <Grid item
      className="Grid2"
      style={{backgroundImage: Gradients.blue}}
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} >
        <Box className="box">
        <Typography style={{color:'#ffffff', marginTop:'10rem', fontSize:'5rem', fontFamily:'Kaushan Script',}}> Login</Typography>
        
        </Box>
      </Grid>
      </Hidden>
     </Grid>
      </Box>
       </Box>  
  
       
  
  </Page>
  )
}

export default Login;
    