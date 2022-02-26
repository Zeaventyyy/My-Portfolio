import './App.css';
import React from 'react';
import Navbar from './landingpage/navbar';
import Main from './landingpage/main';

function App() {
  return (
    <div className="App flex flex-col background h-screen">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
