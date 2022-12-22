import { Card, Box } from '@mui/material'
import React from 'react'
import bg from '../../../assets/tech.jpg'

const RoutinesCard = () => {
  return (
    <div>
      <Card style={{height:'50vh', backgroundImage:`url(${bg})`, 
      backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
        <Box style={{height:'100%', backgroundColor:'rgba(255,255,255,0.6)', display:'flex', alignItems:'center', justifyContent:'center'}}>
      hi
        </Box>
      </Card>
    </div>
  )
}

export default RoutinesCard
