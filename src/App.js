import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from './Weather.js'
import './App.css';
import Picture from './Picture.js';
import Homepage from './Homepage.js';
import Location from './Location.js'

class App extends Component {
  render(){
    return (
      <div className="App">
       <Router>
<Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/location" component={Location} />
</Switch>
</Router>
      </div>
    );
  }
}

export default App;
// 

