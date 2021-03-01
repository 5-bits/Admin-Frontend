import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import userData from '../Data';


import UserCard from './UserCard';
import {userInterface} from '../interfaces';


const AddUser = (props : any) => {

    const [userList, setUserList] = useState(userData);

    const list = userList.map((value:userInterface , index) => <Grid item xs={3}><UserCard data={value} key={index} /></Grid>);

    return (
        <div>
            <h1>Clients</h1>
            <hr />
            <br />
            <Grid container spacing={4}>
                {list}
            </Grid>
        </div>
    )
}

export default AddUser;