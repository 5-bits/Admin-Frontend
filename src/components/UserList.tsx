import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';


import UserCard from './UserCard';
import {userInterface} from '../interfaces';


const AddUser = (props : any) => {

    const [userList, setUserList] = useState(
        [
            {name : "user1", age:18, imageUrl : "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"},
            {name : "user2", age:18, imageUrl : ""},
            {name : "user3", age:18, imageUrl : "https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"},
            {name : "user4", age:18, imageUrl : ""},
            {name : "user5", age:18, imageUrl : ""}
        ]
    );

    const list = userList.map((value:userInterface , index) => <Grid item xs={3}><UserCard data={value} key={index} /></Grid>);

    return (
        <div>
            <h1>Clients</h1>
            <Grid container spacing={4}>
                {list}
            </Grid>
        </div>
    )
}

export default AddUser;