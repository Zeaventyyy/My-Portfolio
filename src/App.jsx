import React from 'react';
import Navbar from './landingpage/navbar';
import Main from './landingpage/main';
import About from './landingpage/about';

function App() {
  return (
    <div className="App ">
      <div className="landingPage flex flex-col background h-screen">
        <Navbar />
        <Main />
      </div>
      <div className="about backgroundAbout h-screen">
        <About />
      </div>
    </div>
  );
}

export default App;
