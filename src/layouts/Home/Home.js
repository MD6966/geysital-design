import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../../components/page/page'
import HeaderComponents from './components/HeaderComponents'
import Welcome from './Welcome'

const Home = () => {

  // const user = useSelector((state)=> state.auth.user.user.name)
  // console.log(user)

  return (
    <Page
    title="Home"
    >
        {/* <MiniDrawer />  */}
        <AppBar position='fixed'>
          <Toolbar> 
           <Typography> Welcome to homepage</Typography> 
            <HeaderComponents /> 
          </Toolbar>
        </AppBar>
        <Box>
          <CssBaseline /> 
          <Welcome /> 
        </Box>
     
    </Page>
  )
}

export default Home
