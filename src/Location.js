import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Weather from './Weather.js';
import Picture from './Picture.js';

export class Location extends Component {
    render() {
        return (
            <div>
               <Weather />
               <Picture /> <br />
               <Link to="/">
               <input type="submit" value="GO BACK"/>
                </Link>
            </div>
        )
    }
}

export default Location
