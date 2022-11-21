import { AppBar, Box, Card, Tab, Tabs, Toolbar } from '@mui/material'
import React from 'react'
import Overview from './Overview'
import Settings from './Settings'
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/styles';
import Gradients from '../../Gradients';
const Modules = () => {
    const [value ,setValue] = React.useState(0)
    const handleTabsChange =(e, value)=> {
        setValue(value)
    }
    const theme = useTheme()
  return (
    <div>
      <Card style={{height:'80vh'}}>
        <AppBar position='static' sx={{backgroundImage:Gradients.blue,marginBottom:'1rem'}}>
            <Box>
                <Tabs
                textColor='#ffffff'
                centered
                onChange={handleTabsChange}
                value={value}
                TabIndicatorProps={{
                    style: {backgroundColor:'#ffffff'}
                }}
                >
                    <Tab label='Overview' /> 
                    <Tab label='Settings' /> 
                </Tabs>
            </Box>
        </AppBar>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        >
        { value === 0 && <Overview />  }
        {value === 1 && <Settings /> }
        </SwipeableViews>
      </Card>
    </div>
  )
}

export default Modules
