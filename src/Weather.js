import React, { Component } from 'react'


class Weather extends Component {

    constructor(props){
        super(props)
        this.state={
           data:null,
           isLoaded:false,
           city:null
        };
    }

    componentDidMount() {
        const apiKey="&APPID=b6b533e6b1e1ecdb3928742316f0f73e";
        const apiUrl="http://api.openweathermap.org/data/2.5/weather?q=";
        const query=this.props.city;
        const url=apiUrl+query+apiKey;
        fetch(url)
        .then((res) =>{ 
            if(res.ok){
            return res.json()}
            else{
                throw new Error('Please input the name of city/country again!')
            }
        })
        .then((result) => {
            this.setState({
                data: result,
                isLoaded: true,
                city: query
            });
        }).catch((error) => {
            console.log(error)
          });
    };

    
    
    
    render() {

        if(this.state.isLoaded===true){
            return(
            <h1>The weather in {this.props.city}: {this.state.data.weather[0].description}<br />
            The temperature equals: {this.state.data.main.temp} Kelvins</h1>
            )
        }
        else{
        return null//<h1>The weather for {this.state.city} cannot be found. Try again</h1>;
        }
    }

}

export default Weather
