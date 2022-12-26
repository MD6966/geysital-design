import React from 'react'
import { Card, Typography, Button, Stack } from '@mui/material'
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
        <Typography>Temperature (Lower Threshold)</Typography>
        <Typography style={{ fontSize: "2rem", fontWeight: 800 }}>
          30 °C
        </Typography>
      </Stack>

      <Button variant="outlined" sx={{ height: "2rem" }}>
        Set Threshold
      </Button>
    </Card>
  </div>
  )
}

export default GeyserModeSelector
