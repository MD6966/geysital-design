import { Card, Box, CardHeader, Typography, AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import bg from '../../../assets/tech.jpg'
import Settings from './Settings'
import Routines from './Routines'
const RoutinesCard = (props) => {
  const {module} = props
  const [value ,setValue] = React.useState(0)
  const handleTabsChange =(e, value)=> {
      setValue(value)
  }
  const theme = useTheme()
  return (
    <div style={{overflowY:'visible'}}>
      <AppBar position='static' sx={{bgcolor:'#fff'}}>
            <Toolbar>
              <Tabs 
              centered
              value={value}
              onChange={handleTabsChange}
              >
                <Tab label='Settings' />
                <Tab label='Routines' />
              </Tabs>
            </Toolbar>
          </AppBar>
      <Card sx={{height:'65vh', overflow:'scroll'}}>
        <SwipeableViews
         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
         index={value}
        >
                {value ===  0 && <Settings module={module} />}
                {value ===  1 && <Routines module={module} />}
        </SwipeableViews>
      </Card>
    </div>
  )
}

export default RoutinesCard
 