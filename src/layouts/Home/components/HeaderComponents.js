import React, { useState } from 'react'
import { AppBar, Avatar, Button, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { useDispatch, useSelector,   } from 'react-redux'
import { logout } from '../../../store/actions'
import { useNavigate, } from 'react-router'
import image from '../../../assets/image.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ViewProfile from './ViewProfile'
import Settings from './Settings'
import HelpCenter from './HelpCenter'
import AddIcon from '@mui/icons-material/Add';
import AddSensor from './AddSensor'

const HeaderComponents = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dialogOpen, setDialogOpen]=useState(false)
    const [settingsDialog, setSettingsDialog]= useState(false)
    const [helpDialog, setHelpDialog]= useState(false)
    const [sensorDialog, setSensorDialog]= useState(false)
    const open = Boolean(anchorEl);
    const user = useSelector((state)=> state.auth.user)
    // console.log(user)
    const handleSignOut = () => {
        dispatch(logout())
        navigate('/')
      }
      const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
      }
    
      const handleClose = () => {
        setAnchorEl(null);
       }

       const ProfileDialogHandler = () => {
        setDialogOpen(true)
        setAnchorEl(null);
       }

       const settingsDialogHandler = () => {
        setSettingsDialog(true)
        setAnchorEl(null);
       }

       const helpDialogHandler = () => {
        setHelpDialog(true)
        setAnchorEl(null)
       }
       const sensorDialogHandler = () => {
          setSensorDialog(true)
          setAnchorEl(null)
       }



       
  return (
    <div
        style={{marginLeft:'auto', display:'flex'}}
        >

        <Avatar src={`${process.env.REACT_APP_URL}${user.profilePic}`} onClick={handleAvatarClick} style={{cursor:'pointer'}} /> 
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'10px'}}>

        
        <span  onClick={handleAvatarClick} style={{cursor:'pointer', color:'#000'}}> {user.name}
        </span>
        <ArrowDropDownIcon style={{color:'#000',cursor:'pointer',}} onClick={handleAvatarClick} /> 
         </div>
         <Menu open={open} onClose={handleClose}
         anchorEl={anchorEl}
         style={{marginTop:'0.8rem',}}
         >
         <MenuItem  >
          <Container>
            <Typography variant='h6' style={{fontWeight:'bold'}}> {user.name}</Typography>
          </Container>
         </MenuItem>
         <Divider style={{margin:'0px 10px'}} /> 
         <List>
   
          <ListItem disablePadding button  onClick={ProfileDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <PersonIcon /> 
          </ListItemIcon>
            <ListItemText> View Profile</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={sensorDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <AddIcon  /> 
          </ListItemIcon>
            <ListItemText> Add Sensor </ListItemText>
          </ListItem>
          <ListItem disablePadding button  onClick={settingsDialogHandler}style={{paddingLeft:'0.5rem', marginRight:'2rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <SettingsIcon /> 
          </ListItemIcon>
            <ListItemText> Account Settings</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={helpDialogHandler}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <InfoIcon  /> 
          </ListItemIcon>
            <ListItemText> Help Center</ListItemText>
          </ListItem>
          <ListItem disablePadding button onClick={handleClose}style={{paddingLeft:'0.5rem'}}>
          <ListItemIcon style={{minWidth: '30px'}}>
            <QuestionMarkIcon  /> 
          </ListItemIcon>
            <ListItemText> FAQ's</ListItemText>
          </ListItem>
          
         </List>
          
          <Divider style={{margin:'0px 10px'}} />  
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button 
        onClick={handleSignOut}
       > Sign Out </Button>
       </div>
         </Menu>
      <ViewProfile open={dialogOpen} close ={()=> setDialogOpen(false)}  />
      <AddSensor open={sensorDialog} close ={()=> setSensorDialog(false)} /> 
      <Settings open={settingsDialog} close={()=> setSettingsDialog(false)} />
      <HelpCenter open={helpDialog} close={()=> setHelpDialog(false)} />
  
        </div>
  )
}

export default HeaderComponents
