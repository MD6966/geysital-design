import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, 
Typography,TextField,
Grid,Card
} from '@mui/material'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
const Settings = (props) => {
  return (
    <div>
      <Dialog open ={props.open} onClose={props.close} fullWidth>
<DialogTitle>

    <SettingsIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
    Settings
    <Divider /> 
</DialogTitle>
<DialogContent>
<Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                <Typography gutterBottom style={{fontWeight:'bold'}}> Change Password </Typography>
                <Divider />
                <Grid container style={{marginTop:'1rem'}} spacing={2}>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField label='Old Password' fullWidth /> 
                  </Grid>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='New Password' fullWidth />
                  </Grid>
                </Grid> 
              
              </Card>

            
</DialogContent>
<DialogActions>
    <Button onClick={props.close} > Close</Button>
    <Button variant='contained'  onClick={props.close}> Change Password</Button>
</DialogActions>
</Dialog>
    </div>
  )
}

export default Settings
