import React from 'react'
import { Card, Typography, Stack, Button } from '@mui/material'
const TempUpperThreshold = () => {
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
        <Typography>Temperature (Upper Threshold)</Typography>
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

export default TempUpperThreshold
