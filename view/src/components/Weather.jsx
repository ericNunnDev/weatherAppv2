import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
         <div id='weather'>
           <h1 id='weatherCity'>City Name</h1>
           <div id='weatherDesc'>Weather Description</div>
           <div id='weatherTemp'>Temperature</div>
         </div>
        )
    }
}

export default Weather;