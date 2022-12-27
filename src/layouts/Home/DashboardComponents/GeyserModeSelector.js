import React from 'react'
import { Card, Typography, Button, Stack, ButtonGroup } from '@mui/material'
const GeyserModeSelector = () => {
  return (
    <div>
   <Card
      elevation={2}
      sx={{
        background: "#e2e2e2",
        borderRadius: "5px",
        display: "flex",
        padding: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Typography>Geyser Mode</Typography>
        <Typography style={{ fontSize: "2rem", fontWeight: 800 }}>
          Gas 
        </Typography>
      </Stack>
        <ButtonGroup variant='outlined' sx={{height:'40px', mt:'1rem'}}>
        <Button> Gas</Button>
        <Button> Hybrid</Button>
        <Button> Electric</Button>
        </ButtonGroup>
      {/* <Button variant="outlined" sx={{ height: "2rem" }}>
        Set Threshold
      </Button> */}
    </Card>
  </div>
  )
}

export default GeyserModeSelector
