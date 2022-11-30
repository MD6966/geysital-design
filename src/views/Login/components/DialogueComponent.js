import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography, Box, Divider } from '@mui/material'
import React from 'react'

const DialogueComponent = ({open, close}) => {

  return (
    <div>
      <Dialog open={open} onClose={close} fullWidth>
        <DialogTitle> Forgot Password
        </DialogTitle>
         
        <DialogContent>
           <Typography gutterBottom> Enter Your email below:</Typography>
           <TextField placeholder='abc@example.com' fullWidth variant='standard' required /> 
           <Box style={{marginTop:'2rem', justifyContent:'flex-end', display:'flex'}}>
        
                <Button onClick={close}> Cancel</Button>
                <Button onClick={close} variant='contained'> Forget</Button>
            
           </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogueComponent
