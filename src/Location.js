import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Weather from './Weather.js';
import Picture from './Picture.js';

export class Location extends Component {
    render() {
        return (
            <div>
               <Weather city={this.props.city}/>
               <h1>{this.props.city}</h1>
               <Picture city={this.props.city}/> <br />
               <Link to="/">
               <input type="submit" value="GO BACK"/>
                </Link>
            </div>
        )
    }
}

export default Location
