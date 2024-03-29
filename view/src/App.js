import React from 'react';
import '../src/styles/App.scss';
import Navigation from './components/Navigation';
import SearchWeather from './components/SearchWeather';
import DefaultContent from './components/DefaultContent';
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
    <main className='center'>
      <SearchWeather />
      {/* <DefaultContent /> */}
      <Weather />
    </main>
    <footer className='page-footer'>
    <Footer />
    </footer>
  </div>
  );
}

export default App;