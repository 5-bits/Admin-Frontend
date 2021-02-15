import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
        width: 250,
    },
  }),
);

const DrawerComponents = (props : any) => {

    const classes = useStyles();
    return (
        <div
          className={classes.list}
          role="presentation"
          onClick={props.toggleDrawer()}
          onKeyDown={props.toggleDrawer()}
        >
          <List>
            <ListItem button>
            <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
            <ListItemText primary="Clients" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
            <ListItemIcon><ErrorOutlineIcon/></ListItemIcon>
            <ListItemText primary="Alerts History"/>
            </ListItem>
          </List>
        </div>
    );
}

export default DrawerComponents;