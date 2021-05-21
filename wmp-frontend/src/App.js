import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

//WMP = watermyplants.js
import WMP from './components/WaterMyPlants'

function App() {
  return (
    <Router>

    <div className="App">
      <Route exact path='/' component={Login} />
      <PrivateRoute exact path="/watermyplants" component={WMP} />
    </div>

    </Router>
  );
}

export default App;
