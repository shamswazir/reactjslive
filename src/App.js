import React from 'react';
import { Route,Switch } from "react-router-dom";

import './App.css';
import Registration from './Registration';
import Login from './Login';

function App() {

    return (
      <>
      
      <Switch>
        <Route exact path="/" component={Registration} />
      </Switch>
      </>
    )
}

export default App;
