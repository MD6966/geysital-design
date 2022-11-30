import { Formik, Form } from 'formik'
import React from 'react'
import TextFieldComponent from './components/TextFieldComponent'
import { useState } from 'react'
import * as Yup from 'yup'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Call, Email, Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { makeStyles } from '@mui/styles'
import SelectComponent from './components/SelectComponent'
import Cities from './components/CitiesData.json'
import ButtonComponent from './components/ButtonComponent'
import {Box, Button, CircularProgress, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import { register } from '../../store/actions/authActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme)=> ({
  icons: {
    color: '#000000'
  }
}))
const SignUpForm = () => {
  const classes = useStyles()
    const initialValues = {
        username : "" ,
        email: "", 
        password: "",
        confirmpassword: "",
        contact: "",
        address: "",
        geyserid: "",
        geysername: "",
        module : 'Smart Hybrid Geyser System ',
        city : null,
        code : null,
        };
        const formValidation = Yup.object({
            username: Yup.string()
            .required("Username is required")
            .min(4, 'User name must be greater than 4' ),
            email: Yup.string()
            .email("Email is Invalid")
            .required("Email is required"),
            password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be 8 characters long"),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password isn't same")
            .required("Confirm Password is required")
            .min(8, "Must be 8 characters long"),
            contact : Yup.string()
            .required("Contact is required")
            .max(11)
            .min(11),
            address: Yup.string()
            .required("Address is required"),
            geyserid: Yup.string()
            .required("Geyser ID is required")
            .min(8, 'Enter Valid Geyser Id')
            .max(16, 'Invalid Geyser ID'),
            geysername: Yup.string()
            .required("Geyser Name is required")
            .min(4, 'Enter Valid Geyser Name'),
            city: Yup.string()
            .required("Please Select Your City")
            .nullable()
        })
        const [Loader ,setLoader] = useState({
          loading:false
        })
        const [showPassword, setShowPassword] = useState(false)
      const [showPassword1, setShowPassword1] = useState(false)
      const dispatch = useDispatch()
      
      const handleShowPassword = () => {
        setShowPassword(!showPassword)
      }
      const handleShowPassword1 = () => {
        setShowPassword1(!showPassword1)
      }
  return (
    <div style={{padding:'3rem', }}>
        <Formik
        initialValues={{...initialValues}}
        validationSchema = {formValidation}
        onSubmit={(values, {resetForm})=> {
          setLoader({
              ...Loader,
              loading : true
            })
          dispatch(register(values)).then(res => {
              setLoader({
                  ...Loader,
                  loading : false
                })
                resetForm({values: ''})
                console.log(res.res.data.message)
          }
          )
      }
    }
        >
          <Form>

        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
            <TextFieldComponent name="username" label="User Name" icon={<Person className={classes.icons}/>} /> 
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextFieldComponent name="email" label="Email ID"  icon={<Email className={classes.icons} />}/>   
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextFieldComponent name="password" label="Password"
      type={showPassword ? 'text' : 'password'}
      icon={<Lock className={classes.icons}/> } endIcon={
     <IconButton onClick={handleShowPassword}>
      {showPassword ? <Visibility />  : <VisibilityOff/>}
     </IconButton> 
      }/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <TextFieldComponent name="confirmpassword" label="Confirm Password"
      type={showPassword1 ? 'text' : 'password'}
      icon={<Lock className={classes.icons}/> }
      endIcon={
        <IconButton onClick={handleShowPassword1}>
         {showPassword1 ? <Visibility />  : <VisibilityOff/>}
        </IconButton> 
         }
      />
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
         <TextFieldComponent name="contact" label="Contact" placeholder="eg: 03012345678" icon={<Call className={classes.icons} />} />
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <SelectComponent    name="city" label="Select City" options={Cities} />
           </Grid>
           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <TextFieldComponent name="address" label="Address" icon={<HomeIcon className={classes.icons}/> } />
           
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <TextFieldComponent name="geyserid" label="Geyser ID" icon={<QrCode2Icon className={classes.icons}/> } />
           </Grid>
           <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <TextFieldComponent name="geysername" label="Geyser Name" icon={<ContentPasteIcon className={classes.icons} /> } />
           </Grid>
        </Grid>
          {
            Loader.loading ? (
              <Box>
                <CircularProgress color='primary' size='2rem' />
              </Box>
            ):
      <ButtonComponent > Register </ButtonComponent>
          }
             <Typography style={{marginTop:'0.5rem',}}>
                Already have account ? <Link to='/auth/login' style={{textDecoration:'none', letterSpacing:'0px'}}> Login here</Link>
              </Typography>
      


          </Form>

        </Formik>
    </div>
  )
}

export default SignUpForm
