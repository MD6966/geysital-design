import React from 'react'
import { Card, Typography, Stack, Button,
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
import { makeStyles } from "@mui/styles";
import { Animated } from 'react-animated-css';
import { useDispatch } from 'react-redux';
import { setThreshold } from '../../../store/actions/Geyser_hybrid_Actions';
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
const TempUpperThreshold = (props) => {
  const classes = useStyles()
    const {module} = props   
    const [animate, toggleAnimate] = React.useState(true);
    const [t, setT] = React.useState(null);
    const [dialogOpen, setDialog] = React.useState(false)
    const [value, setValue] = React.useState(null);
    const id = module.user_ids[0]
    const type = 'temp_upperthreshold'
    // console.log(id)
    const dispatch = useDispatch()
    React.useEffect(() => {
      toggleAnimate(false);
      setTimeout(() => {
        toggleAnimate(true);
        setT(module.temp_upperthreshold);
      }, 500);
    }, [module.temp_upperthreshold]);
    const handleDialogOpen =() => {
        setDialog(true)
    }
    const handleDialogClose =() => {
        setDialog(false)
    }
    const handleChange = (event) => {
        setValue(event.target.value);
      };
      const handleClose = () => {
        setDialog(false)
      };
      const handleSubmit = () => {
        // console.log(value)
        if (value !== null && value !== undefined) {
              dispatch(setThreshold(id, type, value))
        }
        setDialog(false)
      }
  return (
    <div>
      <Card
      elevation={2}
      sx={{
        background: "#e2e2e2",
        borderRadius: "5px",
        display: "flex",
        padding: "1rem",
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Typography>Temperature (Upper Threshold)</Typography>
        <Animated
            animationIn="bounceIn"
            animationInDuration={400}
            animationOut="fadeOut"
            animationOutDuration={400}
            isVisible={animate}
          >
            <Typography
             style={{ fontSize: "2rem", fontWeight: 800 }}
            >{t} °C
            </Typography>
          </Animated>
      </Stack>

      <Button variant="outlined" sx={{ height: "2rem" }} onClick={handleDialogOpen}>
        Set Threshold
      </Button>
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
        value={value}
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
    </div>
  )
}

export default TempUpperThreshold
