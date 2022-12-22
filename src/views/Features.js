import { Box, CssBaseline, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const listItemsData = [
  {name:'Geysital', to:'/auth/login'},
  {name:'Water Tank System'},
  {name:'Fuel Monitoring System'},
  {name:'Gen Set Monitoring System'},
  {name:'Smart Farm Fisheries'},
  {name:'Hybrid Geyser System'},
  {name:'Smart Hybrid Geyser System'},
  {name:'Cold Chain Montioring System'}
  
]

const Features = () => {
  return (
    <div id="features" style={{height:'100vh',display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box>
      <Typography style={{fontSize:'4rem', fontFamily:'kaushan script' }} gutterBottom >
        Our Products
      </Typography>
      <List>
        {listItemsData.map((val, i) => {
            return(
              <>
      <ListItem button component ={Link} to={val.to}>
          <ListItemText> {val.name} </ListItemText>
        </ListItem>
              </>
            )
        })}
        
      </List>
        </Box>
      </Box>
      
    </div>
  )
}

export default Features
