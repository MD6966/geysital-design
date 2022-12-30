import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import bg from '../../../assets/tech.jpg'
import {Animated} from "react-animated-css";
const HeaderCard = (props) => {
  const {module} = props
  // console.log(module)
  const [animate, toggleAnimate] = React.useState(true);
  const [s, setS] = React.useState()
  const [v, setV] = React.useState()
  const [b, setB] = React.useState()
  React.useEffect(() => {
    toggleAnimate(false);
    if(module.geyser_status) {
      setS('ON')
    }
    else {
      setS('OFF')
    }
    if(module.gas_valve) {
      setV('OPEN')
    }
    else {
      setV('CLOSE')
    }
    if(module.burner_status) {
      setB('ON')
    }
    else {
      setB('OFF')
    }
    setTimeout(() => {
      toggleAnimate(true);

    }, 500);
  }, [module]);
  


  return (
    <div>
      <Card style={{height:'20vh', backgroundImage:`url(${bg})`, 
      backgroundPosition:'center', 
      backgroundRepeat:'no-repeat', backgroundSize:'cover',}} >
        <Box style={{backgroundColor:'rgba(255,255,255,0.7)', height:'100%', display:'flex', alignItems:'center', padding:'1rem',
      justifyContent:'space-between'
      }} >
       <Box>
        <Typography style={{fontWeight:'bold', textAlign:'left'}}> Good Morning </Typography>
      <Box style={{display:'flex', alignItems:'center'}}>
      <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
       <h1> {module.name}</h1>
          </Animated>
      </Box>
       </Box>
       <Box>
       <h1> Geyser Status</h1>
       <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
          <h2 style={{fontFamily:'Kaushan Script', color:'#A4182C'}}>
            {s}
         </h2>
          </Animated>
       </Box>

       <Box>
       <h1> Gas Valve</h1>
       <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
          <h2 style={{fontFamily:'Kaushan Script', color:'#A4182C'}}>
            {v}
         </h2>
          </Animated>
       </Box>
       <Box>
       <h1> Burner Status</h1>
       <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
          <h2 style={{fontFamily:'Kaushan Script', color:'#A4182C'}}>
            {b}
         </h2>
          </Animated>
       </Box>
        </Box>
      </Card>
    </div>
  )
}

export default HeaderCard
