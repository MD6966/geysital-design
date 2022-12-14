import { Box, Card, CardHeader, Divider, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gradients from '../../Gradients'
import { get_hybrid_geyser_sensor } from '../../store/actions/Geyser_hybrid_Actions'
import CircleIcon from '@mui/icons-material/Circle';
const ModuleList = () => {
    const dispatch = useDispatch()
    const user_id = useSelector((state)=> state.auth.user.id)
    const geyser = useSelector((state)=> state.geyserHybrid.geyser)
    
    const [state, setState] = React.useState({
        searchValue: '',
        list: []
    })
    React.useEffect(()=> {
        dispatch(get_hybrid_geyser_sensor(user_id))
    }, [])

    // console.log(user_id)

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
    React.useEffect(() => {
        setState({
            list: geyser
        })
    },[geyser])
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleClick = (index, e) => {
            // console.log('===',index)
            setSelectedIndex(index)
      
    }
  return (
    <div>
        <Card style={{height:'7vh' }}>
            <Typography style={{color:'#fff', fontSize:'1.5rem', backgroundImage: Gradients.grey}}> Module List </Typography>
        </Card>
        <Card style={{padding:'1rem'}}>
        <TextField 
        name={state.searchValue}
        value={state.searchValue}
        onChange={handleChange}
        fullWidth variant='standard' placeholder='Search Modules Here' />  
        </Card>
        <Card style={{height:'60vh', overflow:'scroll'}}>
        <List>
            {
                
                !state.list.length  ? 'No results Found! ' : state.list.map((val, index)=> {
                  console.log(val)
                    return (
                        <>
                        <ListItem button onClick={(e) => handleClick(index, e)}  selected={selectedIndex===index}>
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
                    {/* {
                        ModulesNames.map((val, index)=> {
                                    console.log(val.name.length)
                    
                                return (
                                    <>
                                    <ListItem button >
                            <ListItemText>
                                <Typography style={{display:'inline', fontFamily:'Poppins'}}>
                                {val.name}
                                </Typography>
                                <Typography style={{float:'right',}}>
                                {val.Temp}
                                </Typography> 
                            </ListItemText>
                        </ListItem>
                        <Divider /> 
                                    </>
                                    
                                )
                         
                            
                            
                        }
                        )
                    } */}
                    
                </List>

        </Card>
      {/* <Card style={{height:'80vh', overflowY:'scroll'}}>
        <Box >
            <Box style={{backgroundImage:Gradients.blue, padding:'1rem', color:'#ffffff',}}>
                <Typography style={{fontFamily:'Poppins'}}> Module List </Typography>
            </Box>
            <Box style={{padding:'1rem'}}>
                <TextField fullWidth variant='standard' placeholder='Search Modules Here' /> 
            </Box>
            <Box >
                <List>
                    {
                        ModulesNames.map((val, index)=> {
                            return (
                                <>
                                <ListItem button >
                        <ListItemText>
                            <Typography style={{display:'inline', fontFamily:'Poppins'}}>
                            {val.name}
                            </Typography>
                            <Typography style={{float:'right',}}>
                            {val.Temp}
                            </Typography> 
                        </ListItemText>
                    </ListItem>
                    <Divider /> 
                                </>
                                
                            )
                        })
                    }
                    
                </List>
            </Box>
        </Box>
      </Card> */}
    </div>
  )
}

export default ModuleList
