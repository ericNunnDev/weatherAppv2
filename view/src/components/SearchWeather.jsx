import React, { Component } from 'react';

class SearchWeather extends Component {
  state = {
    cityName: this.cityName,
    description: this.description,
    _description: ''
  }
  
    render() {
      return (
        <div id='search'>
          <label htmlFor='city'>City Name: </label>
          <input type='text' id='city' />
          <a className='waves-effect waves-light btn btn-large'>Show me the Weather!</a>
        </div>
      )
    }
  }

export default SearchWeather;