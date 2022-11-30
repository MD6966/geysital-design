import React from 'react'
import TextFieldComponent from './components/TextFieldComponent'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import ButtonComponent from './components/ButtonComponent'
import { login } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { CircularProgress, Box } from '@mui/material'

const LoginForm = () => {
    const initialValues = {
        email: '',
        password:'',
    }
    const formValidation = Yup.object({
        email: Yup.string()
        .email("Email is Invalid")
        .required("Email is required"),
        password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be 8 characters long"),
    })
    const navigate = useNavigate()
    const [Loader ,setLoader] = useState({
        loading:false
      })
    const dispatch = useDispatch()
      const {enqueueSnackbar} = useSnackbar()
  return (
    <div>
        <Formik
        initialValues={{...initialValues}}
        validationSchema = {formValidation}
        onSubmit={(values, {resetForm})=> {
            setLoader({
                ...Loader,
                loading : true
              })
            dispatch(login(values)).then(res => {
                setLoader({
                    ...Loader,
                    loading : false
                  })
                  // navigate('/home')
                  resetForm({values: ''})
            }
            )
        }
      }
        >
            <Form>
            <TextFieldComponent label="Email" name="email"/> 
            <TextFieldComponent label="Password" name="password"/>
            {
            Loader.loading ? (
              <Box>
                <CircularProgress color='primary' size='2rem' />
              </Box>
            ):
      <ButtonComponent > LOGIN  </ButtonComponent>
          }
            </Form>
        </Formik>
     
    </div>
  )
}

export default LoginForm
