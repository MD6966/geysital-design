import { Box, Card, Divider, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import Gradients from '../../Gradients'

const ModuleList = () => {
    const ModulesNames =  [
        {name:'Hybrid Geyser 1' , Temp: '40 °C'},
        {name:'Hybrid Geyser 2' , Temp: '400 °C'},
        {name:'Hybrid Geyser 3' , Temp: '4 °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Helloi Jee' , Temp: 'Infinite °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
    ]
  return (
    <div>
      <Card style={{height:'80vh',}}>
        <Box>
            <Box style={{backgroundImage:Gradients.blue, padding:'1rem', color:'#ffffff'}}>
                <Typography style={{fontFamily:'Poppins'}}> Module List </Typography>
            </Box>
            <Box style={{padding:'1rem'}}>
                <TextField fullWidth variant='standard' placeholder='Search Modules Here' /> 
            </Box>
            <Box style={{overflow:'scroll', overflowX:'hidden',}}>
                <List>
                    {
                        ModulesNames.map((val, index)=> {
                            return (
                                <>
                                <ListItem button >
                        <ListItemText>
                            <Typography style={{display:'inline', fontFamily:'Poppins'}}>
                            {val.name}
                            </Typography>
                            <Typography style={{float:'right',}}>
                            {val.Temp}
                            </Typography> 
                        </ListItemText>
                    </ListItem>
                    <Divider /> 
                                </>
                                
                            )
                        })
                    }
                    
                </List>
            </Box>
        </Box>
      </Card>
    </div>
  )
}

export default ModuleList
