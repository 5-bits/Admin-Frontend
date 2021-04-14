import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import userData from '../Data';
//import backendUser from '../BackendData'

import UserCard from './UserCard';
import {userInterface} from '../interfaces';


const AddUser = (props : any) => {
    const [userList, setUserList] = useState({data : [], isFetching: false})
    useEffect(() => {
        const backendUser = async ()=>{
            try{
                setUserList({ data: userList.data, isFetching: true})
                const resp = await fetch('http://localhost:3200/fetch/user').then( res => res.json())
                setUserList({ data: resp, isFetching: false})
            } catch(e) {
                console.log(e);
                setUserList({ data: userList.data, isFetching: false})
            }
        };
        backendUser();
    }, []);
    const list = userList.data.map((value:userInterface , index: any) => <Grid item xs={3}><UserCard data={value} key={index} /></Grid>);

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