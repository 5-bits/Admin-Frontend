import React, {useState} from 'react';

import UserCard from './UserCard';
import {userInterface} from '../interfaces';

const AddUser = (props : any) => {

    const [userList, setUserList] = useState(
        [
            {name : "user1", age:18, },
            {name : "user2", age:18, },
            {name : "user3", age:18, }
        ]
    );

    const list = userList.map((value:userInterface , index) => <UserCard data={value} key={index} />);

    return (
        <div>
            <h1>User List!</h1>
            {list}
        </div>
    )
}

export default AddUser;