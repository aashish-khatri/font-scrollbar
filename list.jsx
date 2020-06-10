import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { borders } from '@material-ui/system';
import GroupedSelect from './components/select';
import BasicTextField from './textfield'
import BasicButtonGroup from './components/button'
import ContinuousSlider from './components/sliders'
import CustomizedSelects from './components/blend'
import ColorInput from './components/Color'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    maxWidth: 460,
    backgroundColor: "#B9B9B91C",
    position: 'relative',
    overflow: 'auto',
    maxHeight: 800,
    margin: 100,
    },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  addBorder: {
    borderBottom: '3px solid #D5D5D5C4',
    width: '95%',  
    margin: '10px',
  },
  add: {
    backgroundColor: "#8782D9",
    color:"white",
    borderRadius: 5,
    // width: '115%',
    marginBottom: 15, 
    },
  addText: {
    fontSize: 25,
  },
  Buttons: {
    marginBottom: 15, 
  },
  Color: {
    margin:20,
  }
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {
        <li key={`TEXT`}>
          <ul className={classes.ul}>
            <ListSubheader></ListSubheader>
            {
              <div>
              <div className = {classes.addBorder}>
              <ListItem className = {classes.add}>
                <ListItemText primary={`Add Text`} />
                <span className={classes.addText}>+</span>
              </ListItem>
              </div>
              <div className = {classes.addBorder}>
              <ListSubheader>{`TEXT`}</ListSubheader>
              <ListItem> 
              <GroupedSelect/>
              </ListItem>
              <ListItem> 
              <BasicTextField/>
              </ListItem>
              <ListItem className = {classes.Buttons} > 
              <BasicButtonGroup/>
              </ListItem>
              </div>
              <ListSubheader>{`APPEARENCE`}</ListSubheader>
              <ListSubheader>{`Opacity`}</ListSubheader>
              <ListItem>
              <ContinuousSlider/> 
              </ListItem>
              <ListSubheader>{`Blend Mode`}</ListSubheader>
              <ListItem>
              <CustomizedSelects/>
              </ListItem>
              <div>
              <ListItem>
              <ColorInput/>
              </ListItem>
              </div>
              </div> 
            }
          </ul>
        </li>
      }
    </List>
  );
}
