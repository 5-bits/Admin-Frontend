import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { deepPurple } from '@material-ui/core/colors';

import {userInterface} from '../interfaces';

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    title: {
      float : 'right',
    },
    pos: {
      marginBottom: 12,
    },
    avatar : {
        height: '70px', 
        width: '70px', 
        fontSize : '35px',
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
  }));

const UserCard = (props : {data : userInterface}) => {

    const classes = useStyles();
    var avatar = <Avatar className={classes.avatar}><AccountCircleIcon></AccountCircleIcon></Avatar> ; 

    if(props.data.imageUrl!=="")
    {
        avatar = <Avatar alt={props.data.name} src={props.data.imageUrl} className={classes.avatar}></Avatar>;
    }
    else {
        avatar = <Avatar alt={props.data.name} className={classes.avatar}>{props.data.name.charAt(0).toUpperCase()}</Avatar>;
    }

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {avatar}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.data.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Age : {props.data.age}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.data.remarks}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View Profile</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default UserCard;