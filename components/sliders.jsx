import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  root: {
    width: '95%',
    marginLeft: 10,
    marginTop: -20,
  },
  opacity: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    marginLeft:20,
    marginTop:'-17px',
    width:'14%',
  }
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs className={classes.opacity}>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          <TextField placeholder = "100%" className = {classes.text}/>
        </Grid>
      </Grid>
    </div>
  );
}