import React from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';
import Registration from './Registration';
import Login from './Login';

function App() {

    return (
  
      <Switch>
        <Route exact path="/" component={Registration}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    )
}

export default App;
