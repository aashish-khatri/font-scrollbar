import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding:0,
    marginLeft: 10,
    marginTop: -10,
    // margin: theme.spacing(1),
    // minWidth: 120,
    width: '330%',
    // border: '3px solid rgba(213,213,213,0.5)',
    // borderRadius: '10%',
  },
}));

export default function BlendSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Normal</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      </div>
  );
}
