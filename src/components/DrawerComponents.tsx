import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
        width: 250,
    },
  }),
);

const DrawerComponents = (props : any) => {

    const classes = useStyles();
    const history = useHistory();

    const handleClick = (path : string) => {
        history.push(path);
    }

    return (
        <div
          className={classes.list}
          role="presentation"
          onClick={props.toggleDrawer()}
          onKeyDown={props.toggleDrawer()}
        >
          <List>
            <ListItem button onClick={()=> handleClick('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
          </List>
          <List>
            <ListItem button onClick={()=> handleClick('/users')}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Clients" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={()=> handleClick('/')}>
            <ListItemIcon><ErrorOutlineIcon/></ListItemIcon>
            <ListItemText primary="Alerts History"/>
            </ListItem>
          </List>
        </div>
    );
}

export default DrawerComponents;