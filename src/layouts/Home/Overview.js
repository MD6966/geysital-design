import { Avatar, Box, Card, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Gradients from '../../Gradients'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


const Overview = () => {

    const CardsData = [
        { header: 'Geyser Status', status: 'On', icon: (<PowerSettingsNewIcon />), color: Gradients.green  },
        { header: 'Source', status: 'Hybrid', icon: (<PodcastsIcon />) , color: Gradients.orange},
        { header: 'Temperature', status: '25 C', icon : (<DeviceThermostatIcon /> ),  color: Gradients.red},
        { header: 'Gas Valve', status: 'Close', icon : (<SettingsIcon /> ),  color: Gradients.red},
        { header: 'Burner Status', status: 'Off', icon:  (<LocalFireDepartmentIcon /> ),  color: Gradients.red}

    ]
  return (
    <div style={{padding:'1rem'}}>
      <Card style={{ height:'60vh', padding:'1rem', }}>
            <Grid container spacing={2}>
            {
                CardsData.map((val, index)=> {
                    return(
                        <Grid item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={3}
                        xl={3}
                        >
                            <Card style={{height:'10rem'}} elevation={5}>
                            <Box style={{height:'4rem',
                            backgroundImage:Gradients.blue,
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                                <Typography style={{color:'#ffffff', fontFamily:'Poppins'}}> {val.header}   </Typography>
                            </Box>
                            <Box
                            style={{
                                display:'flex',
                                height:'6rem',
                            alignItems:'center',
                            justifyContent:'center'
                            }}
                            >
                                <div>

                                <div
                                style={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                                }}
                                >
                                    <Avatar style={{marginTop:'-3.25rem', border: '3px solid white',
                                    background:val.color
                                }}  >
                                    {val.icon}
                                    </Avatar> 
                                </div>
                                <Typography variant='h4' style={{fontFamily:'Poppins'}}> {val.status} </Typography>
                                </div>
                            </Box>
                            </Card>
                        </Grid>
                        
                    )
                })
            }
                
               
            </Grid>
            
            

      </Card>
    </div>
  )
}

export default Overview
