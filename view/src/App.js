import React from 'react';
import '../src/App.css';

function App() {
  return ( 
  <div className = "App" >
    <header>
      <h1> What's the Weather?</h1> 
    </header>
    <main>
      <div id='search'>
        <label htmlFor='city'>City Name: </label>
        <input type='text' id='city' />
        <button type='submit'>Show me the Weather!</button>
      </div>
      <div>
        <h1 id='weatherCity'>City Name</h1>
        <div id='weatherDesc'>Weather Description</div>
        <div id='weatherTemp'>Temperature</div>
      </div>
    </main>
    <footer>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </footer>
  </div>
  );
}

export default App;