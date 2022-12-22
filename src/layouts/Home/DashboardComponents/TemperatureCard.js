import { Card, Typography, Box } from '@mui/material'
import React from 'react'
import flame from '../../../assets/flame.png'
import {Animated} from "react-animated-css";

const TemperatureCard = (props) => {
  const {module} = props
  const [animate, toggleAnimate] = React.useState(true);
  React.useEffect(() => {
    toggleAnimate(false);
    setTimeout(() => {
      toggleAnimate(true);

    }, 500);
  }, [module]);
  return (
    <div>
      <Card style={{height:'25vh', backgroundImage:`url(${flame})`, 
      backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
        <Box style={{height:'100%', backgroundColor:'rgba(255,191,0,0.4)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Box>
          <Typography variant='h4' style={{fontWeight:800}}>
            Temperature 
          </Typography>
        <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
            >
           <h1 style={{color:'#a4182c'}}>
          {module.temperature} °C
        </h1>
          </Animated>
       
            </Box>
        </Box>
      </Card>
    </div>
  )
}

export default TemperatureCard
