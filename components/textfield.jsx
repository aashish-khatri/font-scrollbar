import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: 50,
      width: '5ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="standard-basic" label="0"/>
      <TextField id="standard-basic" label="184" />
      <TextField id="standard-basic" label="0" /> 
      </form>
  );
}
