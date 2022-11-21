import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Card, TextField, Typography, Grid } from '@mui/material'

const AddSensor = (props) => {
  return (
    <div>
      <Dialog open ={props.open} onClose={props.close} fullWidth>
<DialogTitle>

   Add Sensor 
    <Divider /> 
</DialogTitle>
<DialogContent>
<Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                <Typography gutterBottom style={{fontWeight:'bold'}}> Add Sensor </Typography>
                <Divider />
                <Grid container style={{marginTop:'1rem'}} spacing={2}>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField label='Geyser Name' fullWidth /> 
                  </Grid>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Board-ID' fullWidth />
                  </Grid>
                </Grid> 
              
              </Card> 
</DialogContent>
<DialogActions>
    <Button onClick={props.close} > Close</Button>
    <Button variant='contained' onClick={props.close}> Save</Button>
</DialogActions>
</Dialog>
    </div>
  )
}

export default AddSensor
