import { Box, Button, Card, Container, IconButton, Switch, Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  MenuItem,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  Select
} from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '-webkit-fill-available',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const Routines = () => {
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const [tvalue, setTValue] = React.useState(null);
  const classes = useStyles()
  const [dialogOpen, setDialog] = React.useState(false)
  const handleDialogOpen =() => {
    setDialog(true)
}
const handleDialogClose =() => {
    setDialog(false)
}
const handleChange = (event) => {
    setTValue(event.target.value);
  };
  const handleClose = () => {
    setDialog(false)
  };
  const handleSubmit = () => {
    setDialog(false)
  }
  return (
    <Container >
      <Card sx={{padding:'1rem', display:'flex', justifyContent:'space-between'}} elevation={0}>
        <Box sx={{display:'flex',}}>

        <Typography>
            Add Routine  
        </Typography>
            <AddCircleIcon sx={{ml:'0.5rem'}} /> 
        </Box>
        <Box sx={{display:'flex', float:'right'}}>
        <Typography sx={{mt:'0.5rem'}}>
            Routine :  
        </Typography>
        <Button variant='contained' sx={{bgcolor:'red', ml:'.5rem'}}> OFF </Button>
        </Box>
      </Card>
      <Card elevation={0}sx={{mt:'1rem'}}>
        <Typography sx={{textAlign:'left', fontWeight:600, fontSize:'2.5vw', color:'#9b9b9b'}}>
          ROUTINES
        </Typography>
      </Card>
      <Card sx={{padding:'1rem'}} >
        <Box sx={{display:'flex', justifyContent:'space-between'}}>

        <Typography sx={{fontWeight:'bold', textDecoration:'underline', textAlign:'left', mb:'0.5rem'}}>
          Set Routines ON/OFF - 1
        </Typography>
        <Box>
          <Switch />
          <IconButton>
          <DeleteIcon sx={{color:'#A4182C'}} /> 
          </IconButton>
        </Box>
        </Box>
        <Box sx={{display:'flex'}}>
        <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <Box sx={{mb:'1rem'}}>
      <TimePicker
    label="From"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField  {...params} />}
    />
    </Box>
    <Box sx={{mb:'1rem'}}>

        <TimePicker
        label="To"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </Box>
    
    </LocalizationProvider>
        </Box>
        <Box sx={{padding:'1rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box>
          <Typography sx={{fontSize:'2rem', fontWeight:800,}}>

          {tvalue} °C
          </Typography> 
          <Button onClick={handleDialogOpen} variant='outlined'>
            Set Threshold
          </Button>
          </Box>
        </Box>
        </Box>
        <Dialog  onClose={handleDialogClose} open={dialogOpen}>
        <DialogTitle>
            Set Threshold
        </DialogTitle>
        <DialogContent>
        <DialogContentText>Enter Value to set Temperature Upper Threshold</DialogContentText>
        <FormControl
        className={classes.formControl}
        >
        <InputLabel
        id="demo-simple-select-outlined-label"
        
        >Threshold</InputLabel>
        <Select
        id="demo-simple-select-outlined"
        label="Lower Threshold"
        labelId="demo-simple-select-outlined-label"
        onChange={handleChange}
        value={tvalue}
        >
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={35}>35</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={45}>45</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={55}>55</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={65}>65</MenuItem>
        </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </Card>
      <Card sx={{padding:'1rem',}} >
        <Box sx={{display:'flex', justifyContent:'space-between'}}>

        <Typography sx={{fontWeight:'bold', textDecoration:'underline', textAlign:'left', mb:'0.5rem'}}>
          Set Routines ON/OFF - 1
        </Typography>
        <Box>
          <Switch />
          <IconButton>
          <DeleteIcon sx={{color:'#A4182C'}} /> 
          </IconButton>
        </Box>
        </Box>
        <Box sx={{display:'flex'}}>
        <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <Box sx={{mb:'1rem'}}>
      <TimePicker
    label="From"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField  {...params} />}
    />
    </Box>
    <Box sx={{mb:'1rem'}}>

        <TimePicker
        label="To"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </Box>
    
    </LocalizationProvider>
        </Box>
        <Box sx={{padding:'1rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box>
          <Typography sx={{fontSize:'2rem', fontWeight:800,}}>

          {tvalue} °C
          </Typography> 
          <Button onClick={handleDialogOpen} variant='outlined'>
            Set Threshold
          </Button>
          </Box>
        </Box>
        </Box>
        <Dialog  onClose={handleDialogClose} open={dialogOpen}>
        <DialogTitle>
            Set Threshold
        </DialogTitle>
        <DialogContent>
        <DialogContentText>Enter Value to set Temperature Upper Threshold</DialogContentText>
        <FormControl
        className={classes.formControl}
        >
        <InputLabel
        id="demo-simple-select-outlined-label"
        
        >Threshold</InputLabel>
        <Select
        id="demo-simple-select-outlined"
        label="Lower Threshold"
        labelId="demo-simple-select-outlined-label"
        onChange={handleChange}
        value={tvalue}
        >
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={35}>35</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={45}>45</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={55}>55</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={65}>65</MenuItem>
        </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      </Card>
    </Container>
  )
}

export default Routines
