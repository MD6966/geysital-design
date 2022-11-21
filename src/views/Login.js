import { FormControl, InputLabel, MenuItem, Select, Button, Box, Grid, Hidden, Typography, TextField, CircularProgress  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, redirect, useNavigate } from 'react-router-dom';
import './App.css'
import Page from '../components/page/page';
import Nav from '../components/AppBar/Header'
import { login } from '../store/actions';
import axios from 'axios'
const Login = () => {
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
  const isAuthenticated = useSelector((state) => state.rootReducer.auth.isAuthenticated)
  // console.log(isAuthenticated)
  const isLoading = useSelector((state) => state.rootReducer.auth.isLoading)
  console.log(isLoading)
  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((data) => {
      setIp(data.data.ip);
      
    });
  }, []);
  const [formValues, setFormValues] = useState(initialValues) 
  const handleChange =(e) => {
    
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(login(formValues, ip));
        // console.log(formValues)
      setFormValues(initialValues)
      navigate('/home')
    

  }
  
  return (<Page
  title="Login"
  >
    
  
    <Box className="container" >
      <Box className='neumorphism'>
     <Grid container>
      <Grid item
      className="Grid1"
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} >
        Login here
        <Box style={{marginTop:'2rem', padding: '0px 10px'}}>
          <form onSubmit={handleSubmit}>
          <TextField 
          //  error={hasError('email')}
           fullWidth
          //  helperText={hasError('email') ? formState.errors.email[0] : null}
           label="Email address"
           name="email"
           onChange={handleChange}
           value={formValues.email}
           variant="outlined"
          />
          <TextField 
          // error={hasError('password')}
          fullWidth
          // helperText={
          //   hasError('password') ? formState.errors.password[0] : null
          // }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.password}
          variant="outlined"
          
          />
          {
            isLoading ? <CircularProgress style={{marginTop:'1rem'}}  /> : 
            <Button 
            type='submit'
            variant='contained'
            fullWidth
            style={{
              marginTop:'1rem'
            }}
            > Login</Button>
          }
            
             
            

          </form>
        </Box>
        <Box style={{marginTop:'2%'}}>
          <Typography> New User? <Button
          component={Link}
          to='/auth/register'
          > Register Here</Button> </Typography>
        </Box>
      </Grid>
      <Hidden smDown>
      <Grid item
      className="Grid2"
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
    