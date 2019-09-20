import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
          <div id='search'>
            <label htmlFor='city'>City Name: </label>
            <input type='text' id='city' />
            <button className='btn' type='submit'>Show me the Weather!</button>
          </div>
        )
    }
}

export default Search;