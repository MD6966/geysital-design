import React from 'react'
import { Box, AppBar, Toolbar, Typography, CssBaseline, Grid, Drawer, Divider, Card, TextField, List, ListItem, ListItemText } from '@mui/material'
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
import { get_hybrid_geyser_sensor } from '../../store/actions/Geyser_hybrid_Actions'
import { useDispatch, useSelector } from 'react-redux'
import CircleIcon from '@mui/icons-material/Circle';
import { Rectangle } from '@mui/icons-material'
import {RotatingLines  } from 'react-loader-spinner'
const drawerWidth = '250px'
const Dashboard = () => {
  const dispatch = useDispatch()

  React.useLayoutEffect(()=> {
        dispatch(get_hybrid_geyser_sensor(user_id))
  }, [])
  const user_id = useSelector((state)=> state.auth.user.id)
  const user = useSelector((state)=> state.auth.user)
  const geyser = useSelector((state)=> state.geyserHybrid.geyser)
    
  const [state, setState] = React.useState({
    searchValue: '',
    list: []
})
const [loader, setLoader]= React.useState(true)
React.useEffect(()=> {
    setTimeout(()=> {
          setLoader(false)
    },1000)
}, [])

const handleChange = (e) => {
  const results = geyser.filter(val => {
      if (e.target.value == "") return geyser
      return val.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  setState({
      searchValue: e.target.value,
      list: results
  })
  
}
console.log(geyser)
React.useLayoutEffect(() => {
  setState({
      list: geyser
  })

},[geyser])
  
const [selectedIndex, setSelectedIndex] = React.useState(0);
const [selectedModule, setSelectedModule] = React.useState(0);
// console.log(selectedModule)
    const handleClick = (index,val,  e) => {
            setSelectedIndex(index)
            // console.log(val)
            setSelectedModule(index)
      
    }
  //  console.log('Module',geyser[selectedModule])
  
   
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
       
        <Box style={{backgroundColor:'#e2e2e2', height:'150vh', paddingLeft:drawerWidth, padding:'2rem', width:'100%'}}>
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
            <Typography style={{color:'#fff', fontSize:'1.5rem', backgroundImage: Gradients.grey}}> Module List </Typography>
            <Card style={{padding:'1rem'}} elevation={0}>
            <TextField 
            name={state.searchValue}
            value={state.searchValue}
            onChange={handleChange}
            fullWidth variant='standard' placeholder='Search Modules Here' />  
            </Card>
            <Card style={{height:'60vh', overflow:'scroll'}}>
        <List>
          {loader ?  <RotatingLines
                strokeColor="grey"
                 strokeWidth="5"
                 animationDuration="0.75"
                  width="80"
                 visible={loader}/> :
                 !state.list.length  ? 'No results Found! ' : state.list.map((val, index)=> {
                  // console.log(val)
                    return (
                        <>
                        <ListItem button onClick={(e) => handleClick(index, val, e)}  selected={selectedIndex===index}>
                <ListItemText   >
                    <Typography style={{display:'inline', fontFamily:'Poppins'}} >
                    {val.name }
                    </Typography>
                    <Typography style={{float:'right',}}>
                    {val.temperature} °C <CircleIcon style={{color: val.system_status ? 'green' : 'red', fontSize:'1rem'}}/> 
                    </Typography> 
                </ListItemText>
            </ListItem>
            <Divider /> 
                        </>
                        
                    )
                })
                 
                 } 
                </List>
               

        </Card>
            {/* <ModuleList />  */}

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
              <HeaderCard module={geyser[selectedModule]}   />   
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
                  <TemperatureCard module={geyser[selectedModule]} /> 
                </Grid>
                <Grid item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                >
                <GeyserMode module={geyser[selectedModule]} loading={loader}  />
                </Grid>
                <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                >
                 <RoutinesCard module={geyser[selectedModule]} loading={loader} /> 
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
