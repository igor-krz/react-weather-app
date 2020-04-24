import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Location from "./Location.js"


class Homepage extends Component {
   constructor(props){
       super(props);

       this.state={
           city:''
       }
    // this is ES5 syntax, as are the functions below. 
    // Try commenting it out and see if the app still works
    this.updateInput=this.updateInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    } 

    // Put these functions into ES6 syntax along with the above 
    updateInput(event){
        this.setState({city:event.target.value})
        {console.log(this.state.city)}
    }
    handleSubmit(){
        console.log('The input value is: '+ this.state.city)
    }
    render() {
        return (
            <div>
                <h1>Welcome to weather-app-react!!</h1>
                <h2>Please input the name of the city to the text-box below and press submit button to view weather details and picture!</h2>
                
                
                <label>
                    City:
                    <input type="text" onChange={(e)=>this.props.newState(e.target.value)}/>
                </label>
                <Link to="/location">
                {/* This should be wrapped in a form */}
                <input type="submit" onClick={this.handleSubmit} />
                
                </Link>
               
                
                
            </div>
        )
    }
}

export default Homepage