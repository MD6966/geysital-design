import React from 'react'
import { Box, AppBar, Toolbar, Typography, CssBaseline, Grid } from '@mui/material'
import Page from '../../components/page/page'
import HeaderComponents from './components/HeaderComponents'
import ModuleList from './ModuleList'
import Modules from './Modules'
import RecentAlerts from './RecentAlerts'

const Dashboard = () => {
  return (
    <div>
       <Page
    title="Dashboard"
    >
        <AppBar position='static'>
          <Toolbar> 
           <Typography> Dashboard</Typography> 
            <HeaderComponents /> 
          </Toolbar>
        </AppBar>
        <Box style={{backgroundColor:'#e2e2e2', height:'100vh', padding:'1rem'}}>
          <CssBaseline /> 
          <Grid container spacing={2}>
            <Grid item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            >
        <ModuleList /> 
            </Grid>
            <Grid item
            xs={7}
            sm={7}
            md={7}
            lg={7}
            xl={7}
            >
        <Modules /> 
            </Grid>
            <Grid item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            xl={2}
            >
        <RecentAlerts /> 
            </Grid>

          </Grid>
        </Box>
     
    </Page>
    </div>
  )
}

export default Dashboard
