import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from './Weather.js'
import './App.css';
import Picture from './Picture.js';
import Homepage from './Homepage.js';
import Location from './Location.js'

class App extends Component {
  constructor(){
    super();
  this.state={
    city:null
  }
  this.updateInfo=this.updateInfo.bind(this)
}
  updateInfo(event){
    this.setState({
      city:event
    })
    }
  
  
  render(){
    return (
      <div className="App">
         <Router>
    <Switch>
          <Route exact path="/" render={props=>(
            <Homepage {...props} newState={this.updateInfo}/>
          )} />
          <Route path="/location"  render={props=>(
          <Location {...props} city={this.state.city}/>
          )} />
    </Switch>
    </Router>
       
      </div>
    );
  }
}

export default App;
 

