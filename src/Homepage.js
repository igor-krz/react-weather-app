import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Location from "./Location.js"


class Homepage extends Component {
   constructor(props){
       super(props);

       this.state={
           city:''
       }
    
    this.updateInput=this.updateInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    } 
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
                <input type="submit" onClick={this.handleSubmit} />
                
                </Link>
               
                
                
            </div>
        )
    }
}

export default Homepage