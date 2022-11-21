import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField, Typography } from '@mui/material'


const HelpCenter = (props) => {
  return (
    <div>
        <Dialog open ={props.open} onClose={props.close} fullWidth>
<DialogTitle>

    <InfoIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
    Complaint 
    <Divider /> 
</DialogTitle>
<DialogContent>
    <Typography gutterBottom>
    Please tell us about the issue in a clear way. Our agent will get back to you as soon as possible
        </Typography> 
        <TextField fullWidth 
        label='Message'
        /> 
</DialogContent>
<DialogActions>
    <Button onClick={props.close} > Close</Button>
    <Button variant='contained' onClick={props.close}> Save</Button>
</DialogActions>
</Dialog>
      
    </div>
  )
}

export default HelpCenter
