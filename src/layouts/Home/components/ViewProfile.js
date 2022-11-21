import { Avatar, Box, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import image from '../../../assets/image.jpg'

const ViewProfile = (props) => {
  return (
    <div>
      <Dialog open ={props.open} onClose={props.close} fullWidth>

        <DialogTitle>

            <PersonIcon style={{minWidth:'3rem', marginBottom:'-0.30rem'}}/> 
            View Profile
            <Divider /> 
        </DialogTitle>
        <DialogContent>
            <Box >
              <Card elevation={5} style={{padding: '1rem'}}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Avatar style={{height:'100px', width:'100px'}} src={image} /> 
                  <Box style={{padding:'1rem'}}>
                  <Typography variant='h4' style={{ fontWeight:'bold'}}> Rubitron Labs</Typography>
                    <Box style={{paddingTop:'1rem'}}>
                    <Button> Chose File</Button>
                    <Button variant='contained'> Upload</Button>
                    </Box>
                  </Box>
                </Box>
              </Card>

              <Card elevation={5} style={{padding: '1rem', marginTop:'1rem'}}>
                <Typography gutterBottom style={{fontWeight:'bold'}}> Profile </Typography>
                <Divider />
                <Grid container style={{marginTop:'1rem'}} spacing={2}>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                    <TextField label='Name' fullWidth /> 
                  </Grid>
                  <Grid item sx={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField label='Email' fullWidth />
                  </Grid>
                </Grid> 
              </Card>

            </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.close} > Close</Button>
            <Button variant='contained' onClick={props.close}> Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ViewProfile
