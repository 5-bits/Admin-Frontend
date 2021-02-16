import React from 'react';

const AddUser = (props : any) => {
    return (
        <div>
            <h1>User List!</h1>
            <form>
                <input name="name"></input>
                <input name="age"></input>
                <input type="submit"></input>
                <input type="reset"></input>
            </form>
        </div>
    )
}

export default AddUser;