import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import MenuBar from "./components/MenuBar";
import HomePage from './components/HomePage';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UserDetail from './components/UserDetail';

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
