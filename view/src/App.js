import React from 'react';
import '../src/App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Search from './components/Search';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return ( 
  <div className='App container'>
    <Navigation />
    <Header />
    <main>
      <Search />
      <Weather />
    </main>
    <Footer />
  </div>
  );
}

export default App;