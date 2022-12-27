import { Box, Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
const Routines = () => {
  return (
    <Container>
      <Card sx={{padding:'1rem', display:'flex'}}>
        <Box sx={{display:'flex',}}>

        <Typography>
            Add Routine  
        </Typography>
            <AddCircleIcon sx={{ml:'0.5rem'}} /> 
        </Box>
        <Box sx={{display:'flex',}}>
        <Typography>
            Routine :  
        </Typography>
        <Button variant='contained' sx={{bgcolor:'red', ml:'.5rem'}}> OFF </Button>
        </Box>
      </Card>
    </Container>
  )
}

export default Routines
