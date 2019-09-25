import React, { useState, useEffect} from 'react';

function SearchWeather() {
  const [cityName, setCityName] = useState('');
     
      return (
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='fas fa-city fa-2x prefix' />
                <input 
                  type='text' 
                  id='city' 
                  placeholder='Ex: Detroit, MI'
                  />
                <label className='placeholder' htmlFor='cityName'> Enter the name of your city and state:</label>
                <button className='waves-effect waves-light btn btn-large'>Show me the Weather!</button>
              </div>
            </div>
          </form>
        </div>
      )
}

export default SearchWeather;