import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    inp: {
      minWidth: 100,
      display : 'flex',
      margin : 'auto',
      marginBottom : 20,
    },
    paper : {
        paddingTop : 20,
        paddingBottom : 25,
        paddingLeft : 80,
        paddingRight : 80,
        width : "80%",
        margin : "auto",
        marginTop : 40,
        textAlign : "center"
    },
    button : {
        marginLeft : 10,
        marginRight : 10,
    }
  }));


const AddUser = (props : any) => {

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper} elevation={3}>
                <h1>Add Client</h1>
                <form>
                    <TextField required className={classes.inp} id="filled-basic" label="Name" variant="outlined" />
                    <TextField required className={classes.inp} id="filled-basic" label="Age" type="number" variant="outlined" />
                    <TextField required className={classes.inp} id="filled-basic" label="Address" multiline rows={4} variant="outlined" />
                    <TextField required className={classes.inp} id="filled-basic" label="Client Email" type="email" variant="outlined" />
                    <TextField required className={classes.inp} id="filled-basic" label="Guardian Email" type="email" variant="outlined" />
                    <TextField className={classes.inp} id="filled-basic" label="Remarks" multiline rows={4} variant="outlined" />
                    
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>Submit</Button>
                    <Button variant="contained" type="reset" className={classes.button}>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}

export default AddUser;