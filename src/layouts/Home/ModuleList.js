import { Box, Card, CardHeader, Divider, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gradients from '../../Gradients'
import axios from 'axios'
import Hybrid_Geyser_Sensors from '../../store/actions/geyserHybridActions'
const ModuleList = () => {
    const ModulesNames =  [
        {name:'Hybrid Geyser 1' , Temp: '40 °C'},
        {name:'Hybrid Geyser 2' , Temp: '400 °C'},
        {name:'Hybrid Geyser 3' , Temp: '4 °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Helloi Jee' , Temp: 'Infinite °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Hybrid Geyser 4' , Temp: '-40 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
        {name:'Smart Geyser' , Temp: '50 °C'},
    ]
    const dispatch = useDispatch()
    const user_id = useSelector((state)=> state.auth.user.id)
    // React.useEffect(async ()=> {
    //     try {
    //         const res = await axios.get(`${process.env.REACT_APP_URL}geyser_hybrid/sensors/${user_id}`)
    //         console.log(res)
    //     // dispatch({
    //     //     type : 'GET_HYBRID_GEYSER_SENSOR',
    //     //     payload: res.data
    //     // })
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }, [])
    const [searchValue, setSearchValue]= useState('')
    const [state, setState] = React.useState({
        searchValue: '',
        list: []
    })

    // console.log(user_id)

    const handleChange = (e) => {
        const results = ModulesNames.filter(val => {
            if (e.target.value == "") return ModulesNames
            return val.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({
            searchValue: e.target.value,
            list: results
        })
        
    }
    React.useEffect(() => {
        setState({
            list: ModulesNames
        })
    },[])
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
                
                !state.list.length  ? 'No results Found! ' : state.list.map(val=> {
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
