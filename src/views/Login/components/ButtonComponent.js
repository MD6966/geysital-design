import React from 'react'
import { Button } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { useFormikContext } from 'formik'

const useStyles = makeStyles((theme)=> ({
    root : {
        marginTop: theme.spacing(3),
        display:'flex',
        justifyContent:'center'
        
    },
    btn: {
        height: '50px',
        width:'200px',
        borderRadius: "30px",
    }

}))

const ButtonComponent = ({children, ...otherProps}) => {
    const {submitForm} = useFormikContext()
    const handleSubmit = () => {
        submitForm();
    }
    const configButton ={
        variant:'contained',
        color:'primary',
        onClick: handleSubmit
    }
    const classes = useStyles()
  return (
    <div className={classes.root}>
         <Button {...configButton} className={classes.btn} >
        {children}
      </Button>
    </div>
  )
}

export default ButtonComponent
