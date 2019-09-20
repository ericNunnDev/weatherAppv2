import React, { Component } from 'react';

class SearchWeather extends Component {
  state = {
    cityName: this.cityName,
    description: this.description,
    _description: ''
  }
  
    render() {
      return (
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='fas fa-city fa-2x prefix' />
                <input type='text' id='city' />
                <label htmlFor='city'> Enter the name of your city here</label>
                <a className='waves-effect waves-light btn btn-large'>Show me the Weather!</a>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

export default SearchWeather;