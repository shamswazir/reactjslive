import React from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';
import Registration from './Registration';
import Login from './Login';

function App() {

    return (
      <>
       <Registration/>
      <Switch>
        <Route exact path="/login" component={Login}/>
      </Switch>
      </>
    )
}

export default App;
