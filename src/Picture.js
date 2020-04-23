import React, { Component } from 'react';
import './Picture.css'

class Picture extends Component {
    constructor(props){
        super(props)
        this.state={
           data:null,
           isLoaded:false,
           city:null
        };
    }

    componentDidMount() {
        const apiKey="&client_id=Us6DQ10wkNT9Qqk30h4a47JsCZYy8OYyFYkzh-yKF5Y";
        const apiUrl="https://api.unsplash.com/search/photos/?page=1&per_page=1&query=";
        const query="Vancouver";
        const url=apiUrl+this.state.city+apiKey;
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                data: result,
                isLoaded: true,
                city: query
            });
        })
    };
    render(){
    if(this.state.isLoaded===true){
        return(
        //<h1>The link to the image equals: {this.state.data.results[0].urls.raw}</h1>
        <img src={this.state.data.results[0].urls.raw} alt="London"></img>
        )
        }
        else{
            return null//<h1>The weather for {this.state.city} cannot be found. Try again</h1>;
        }
    }
}

export default Picture
