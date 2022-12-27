import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  DialogContentText,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from "@mui/material";
import React from "react";
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

const TempLowerThreshold = () => {
    const classes = useStyles()
    const [dialogOpen, setDialog] = React.useState(false)
    const [value, setValue] = React.useState(null);
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
        setDialog(false)
      }
  return (
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
        <Typography>Temperature (Lower Threshold)</Typography>
        <Typography style={{ fontSize: "2rem", fontWeight: 800 }}>
          30 °C
        </Typography>
      </Stack>

      <Button variant="outlined" sx={{ height: "2rem" }} onClick={handleDialogOpen}>
        Set Threshold
      </Button>
      <Dialog  onClose={handleDialogClose} open={dialogOpen}>
        <DialogTitle>
            Set Threshold
        </DialogTitle>
        <DialogContent>
        <DialogContentText>Enter Value to set Temperature Lower Threshold</DialogContentText>
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
  );
};

export default TempLowerThreshold;
