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
          <button className='waves-effect waves-light btn btn-large' type='submit'>Show me the Weather!</button>
        </div>
      )
    }
  }

export default SearchWeather;