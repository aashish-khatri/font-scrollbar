import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:20,
    marginBottom:10,
    '& > *': {
    },
  },
  secondGroup: {
    marginLeft: 40,
  },
  thirdGroup: {
    marginRight: 40,
  },
  fourthGroup: {
    marginRight: 40,
  },
  fifthGroup: {
    marginRight: 20,
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <ButtonGroup className = {classes.secondGroup} color="primary" aria-label="outlined primary button group">
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
      </div>
      <div className={classes.root}>
      <ButtonGroup className = {classes.thirdGroup}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <ButtonGroup className = {classes.fourthGroup}>
        <Button>1</Button>
        <Button>2</Button>
      </ButtonGroup>
      <ButtonGroup className = {classes.fifthGroup}>
        <Button>1</Button>
      </ButtonGroup>
      <ButtonGroup className = {classes.sixthGroup}>
        <Button>1</Button>
      </ButtonGroup>
      </div>
      </div>
  );
}
