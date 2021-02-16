import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    inp: {
      minWidth: 100,
      display : 'flex',
      margin : 'auto',
      marginBottom : 15,
    },
    paper : {
        paddingTop : 20,
        paddingBottom : 25,
        paddingLeft : 100,
        paddingRight : 100,
        width : "75%",
        margin : "auto",
        marginTop : 40,
        textAlign : "center"
    },
    button : {
        marginLeft : 10,
        marginRight : 10,
    },
    avatar : {
        height: '50px', 
        width: '50px', 
        fontSize : '35px',
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
  }));


const AddUser = (props : any) => {

    const classes = useStyles();
    const {register, handleSubmit, setValue} = useForm();

    const submitForm = (data : any)=> {
        console.log(data);
    }

    return (
        <div>
            <Paper className={classes.paper} elevation={3}>
                <h1>Add Client</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Grid container spacing={4}>
                        <Grid item xs={11}></Grid>
                        <Grid item xs={4}>
                            <TextField inputRef={register} required className={classes.inp} id="filled-basic" label="Name" variant="outlined" name="name"/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField inputRef={register} required className={classes.inp} id="filled-basic" label="Age" type="number" variant="outlined" name="age"/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField inputRef={register} className={classes.inp} id="filled-basic" label="Image Url" type="url" variant="outlined" name="imageUrl" />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <TextField inputRef={register} required className={classes.inp} id="filled-basic" label="Client Email" type="email" variant="outlined" name="email1" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField inputRef={register} required className={classes.inp} id="filled-basic" label="Guardian Email" type="email" variant="outlined" name="email2" />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField inputRef={register} required className={classes.inp} id="filled-basic" label="Address" multiline rows={4} variant="outlined" name="address" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField inputRef={register} className={classes.inp} id="filled-basic" label="Remarks" multiline rows={4} variant="outlined" name="remarks" />
                        </Grid>
                    </Grid>
                    
                    <Button variant="contained" color="primary" type="submit" className={classes.button}>Submit</Button>
                    <Button variant="contained" type="reset" className={classes.button}>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}

export default AddUser;