// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        {/* Your main content goes here */}
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
