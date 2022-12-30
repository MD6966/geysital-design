import { Grid } from '@mui/material'
import React from 'react'
import GeyserModeSelector from './GeyserModeSelector'
import TempLowerThreshold from './TempLowerThreshold'
import TempUpperThreshold from './TempUpperThreshold'

const Settings = (props) => {
  const {module} = props
  return (
    <div style={{padding:'1rem'}}>
      <Grid
      container
      spacing={2}
      >
        {/* <Grid item
        xs={12}
        md={12}
        lg={12}
        >
        <TempLowerThreshold /> 
        </Grid> */}
        <Grid item
        xs={12}
        md={12}
        lg={12}
        >
      <TempUpperThreshold module={module} />
        </Grid>
        <Grid item
        xs={12}
        md={12}
        lg={12}
        >
        <GeyserModeSelector module={module} /> 
        </Grid>
      </Grid>
    </div>
  )
}

export default Settings
