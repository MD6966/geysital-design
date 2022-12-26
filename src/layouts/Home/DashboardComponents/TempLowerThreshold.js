import { Box, Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import React from 'react'

const TempLowerThreshold = () => {
  return (
 
      <Card elevation={2} sx={{background:'#e2e2e2', borderRadius:'5px', display:'flex', padding:'1rem',
      justifyContent:'space-between'}}>
        {/* <Box>

        <Typography>
            Temperature (Lower Threshold)
        </Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Typography style={{fontSize:'2rem', fontWeight:800, }}>
                Temp
            </Typography>
            <Button> Hi </Button>
        </Box>
        </Box> */}
    <Stack>
    <Typography>
        Temperature (Lower Threshold)
        </Typography>
        <Typography style={{fontSize:'2rem', fontWeight:800, }}>
        30 °C
            </Typography>
    </Stack>

        <Button variant='outlined'sx={{height:'2rem'}}>
            Set Threshold
        </Button>
     
      </Card>
  )
}

export default TempLowerThreshold
