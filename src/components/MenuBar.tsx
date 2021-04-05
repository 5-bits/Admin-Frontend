import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {useHistory} from 'react-router-dom';

import DrawerComponents from './DrawerComponents';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      cursor : "pointer"
    },
    list: {
        width: 250,
    },
    addIcon: {
        marginRight : 10,
    }
  }),
);

const MenuBar = () => {

    const classes = useStyles();
    const [drawer, setDrawer] = React.useState(false);
    const history = useHistory();

    const handleClick = (path : string) => {
        history.push(path);
    }

    const toggleDrawer = () => (
        event: React.KeyboardEvent | React.MouseEvent,
        ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawer(!drawer);
    };

    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Drawer anchor="left" open={drawer} onClose={toggleDrawer()}>
                <DrawerComponents toggleDrawer={toggleDrawer} />
            </Drawer>
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer()}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} onClick={()=> handleClick('/')}>
                Medibot Admin
            </Typography>
            <Button color="inherit" onClick={()=> handleClick('/add')}><PersonAddIcon className={classes.addIcon}></PersonAddIcon> Add Client</Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default MenuBar;