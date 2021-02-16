import React from 'react';

const HomePage = (props : any) => {
    return (
        <div>
            <h1>Home Page!</h1>
            <form>
                <input name="name"></input>
                <input name="age"></input>
                <input type="submit"></input>
                <input type="reset"></input>
            </form>
        </div>
    )
}

export default HomePage;