import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';


import UserCard from './UserCard';
import {userInterface} from '../interfaces';


const AddUser = (props : any) => {

    const [userList, setUserList] = useState(
        [
            {
                name : "Josiitaa",  
                age:18, 
                address : "Chennai",
                imageUrl : "https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",
                email1 : "test1@test.com",
                email2 : "test2@test.com",
                remarks : "Hello \n Lorem Ipsum dolor \n Some other random stuff here too"
            },
            {
                name : "Aditya",  
                age:18, 
                address : "Delhi",
                imageUrl : "",
                email1 : "test1@test.com",
                email2 : "test2@test.com",
                remarks : "Hello \n Lorem Ipsum dolor \n Some other random stuff here too"
            },
            {
                name : "Pratik",  
                age:18, 
                address : "Kolkata",
                imageUrl : "https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg",
                email1 : "test1@test.com",
                email2 : "test2@test.com",
                remarks : "Hello \n Lorem Ipsum dolor \n Some other random stuff here too"
            },
            {
                name : "Prithviraj",  
                age:18, 
                address : "Chennai",
                imageUrl : "",
                email1 : "test1@test.com",
                email2 : "test2@test.com",
                remarks : "Hello \n Lorem Ipsum dolor \n Some other random stuff here too"
            },
            {
                name : "Ganesh",  
                age:18, 
                address : "Chennai",
                imageUrl : "",
                email1 : "test1@test.com",
                email2 : "test2@test.com",
                remarks : "Hello \n Lorem Ipsum dolor \n Some other random stuff here too"
            },
        ]
    );

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