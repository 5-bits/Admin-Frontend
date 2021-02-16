import React from 'react';
import {userInterface} from '../interfaces';

const UserCard = (props : {data : userInterface}) => {

    return (
        <div>
            <h1>User here!</h1>
            {props.data.name}
        </div>
    );
}

export default UserCard;