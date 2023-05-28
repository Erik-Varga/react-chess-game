import React from 'react';
import './App.css';
import Chessboard from './components/Chessboard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id='app'>
      <Header />
      <Chessboard />
      <Footer />
    </div>
  );
}

export default App;
