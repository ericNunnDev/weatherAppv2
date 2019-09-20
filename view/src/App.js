import React from 'react';
import '../src/styles/App.scss';
import Navigation from './components/Navigation';
import SearchWeather from './components/SearchWeather';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return ( 
  <div className='App container'>
    <header>
      <nav>
      <Navigation />
      </nav>
    </header>
    <main>
      <SearchWeather />
      <Weather />
    </main>
    <footer className='page-footer'>
    <Footer />
    </footer>
  </div>
  );
}

export default App;