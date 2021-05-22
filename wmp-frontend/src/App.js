import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useState } from "react";
import './App.css';
import Signup from './components/Signup';
import Home from "./components/Home";
import Plant from "./components/Plant";

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

//WMP = watermyplants.js
import WMP from './components/WaterMyPlants'

function App() {
  return (
    <Router>
        <div className="App">
            <Link to="/Signup">Signup</Link>
            <Switch>
                {/* <Route exact path = "/home" component={Home} /> */}
                <Route path = "/Signup" component={Signup} />
                <Route path = "plants/:id" component={Plant} />
                <Route exact path='/' component={Login} />
                <PrivateRoute exact path="/watermyplants" component={WMP} />
            </Switch>
        </div>
    </Router>
  );
}
export default App;