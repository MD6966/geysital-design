import React from 'react'
import { Box, AppBar, Toolbar, Typography, CssBaseline, Grid, Drawer, Divider, Card } from '@mui/material'
import Page from '../../components/page/page'
import HeaderComponents from './components/HeaderComponents'
import ModuleList from './ModuleList'
import Modules from './Modules'
import RecentAlerts from './RecentAlerts'
import Gradients from '../../Gradients'
import logo from '../../assets/rtl-logo.webp'
import geysital from '../../assets/geysital.jpg'
import HeaderCard from './DashboardComponents/HeaderCard'
import TemperatureCard from './DashboardComponents/TemperatureCard'
import GeyserMode from './DashboardComponents/GeyserMode'
import RecentAlertsCard from './DashboardComponents/RecentAlertsCard'
import RoutinesCard from './DashboardComponents/RoutinesCard'
const drawerWidth = '250px'
const Dashboard = () => {
  return (
    <div>
       <Page
    title="Dashboard"
    >
        <AppBar position='fixed' style={{zIndex: 2222}} sx={{bgcolor:'#ffffff'}} elevation={0}>
          <Toolbar> 
           <img src={logo} alt='logo' width='170px' style={{marginLeft:drawerWidth}} />
            <HeaderComponents /> 
          </Toolbar>
        </AppBar>
       
        <Box style={{backgroundColor:'#e2e2e2', height:'100vh', paddingLeft:drawerWidth, padding:'2rem'}}>
          <CssBaseline /> 
          {/* <Grid container spacing={2}>
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

          </Grid> */}
          <Drawer open={true} variant='permanent' style={{zIndex:-1,}}
          PaperProps={{
            sx: {
              width:drawerWidth,
              backgroundColor:'#fff',
              border: 'none',
              overflow:'hidden'
            }
          }}
          >
            <Toolbar /> 
            <Box style={{padding:'1rem', display:'flex', alignItems:'center',}}>
            <img src={geysital} alt='logo' width='50px' />
            <Typography style={{fontFamily:'Kaushan Script', color: '#A4182C', fontSize:'1.75rem'}}> Geysital</Typography> 
            </Box>
            <Divider /> 
            <ModuleList /> 

          </Drawer>
          <Box style={{marginLeft:'15rem'}} >
          <Toolbar /> 
          
          <Grid container spacing={2}>
            <Grid item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            >
              <HeaderCard />   
            </Grid>
            <Grid item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            >
              <Grid container spacing={2}>

                <Grid item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                >
                  <TemperatureCard /> 
                </Grid>
                <Grid item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                >
                <GeyserMode />
                </Grid>
                <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                >
                 <RoutinesCard /> 
                </Grid>
                
                  </Grid>
            </Grid>
            <Grid item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            >
                <RecentAlerts /> 
            </Grid>
            {/* <Grid item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            >
        <TemperatureCard /> 
            </Grid>
            <Grid item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            >
        <GeyserMode /> 
            </Grid>
            <Grid item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            >
        <RecentAlertsCard /> 
            </Grid> */}
          

          </Grid>
          
          </Box>
          {/* <Grid container>
            <Grid item>
              <Card style={{hieght:'100vh', backgroundColor:'#ffffff'}}>
                Hello from Card 
              </Card>
            </Grid>
          </Grid> */}
        </Box>
      
     
    </Page>
    </div>
  )
}

export default Dashboard
