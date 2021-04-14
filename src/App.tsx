import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import MenuBar from "./Components/MenuBar";
import HomePage from './Components/HomePage';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import UserDetail from './Components/UserDetail';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <MenuBar />
          <div className="mainbody">
            <Switch>
              <Route path="/add">
                <AddUser />
              </Route>
              <Route path="/users/:userId">
                <UserDetail />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
