import React from 'react';
import Navbar from './landingpage/navbar';
import Main from './landingpage/main';
import About from './landingpage/about';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import Experience from './landingpage/experience/experience';

function App() {
  return (
    <div className="App ">
      <div className="flex flex-col background h-screen">
        <Navbar />
        <Main />
      </div>
      <div className="backgroundAbout h-screen">
        <About />
      </div>
      <div className="background h-screen">
        <Experience />
      </div>
      <div className="hidden md:block fixed bottom-0 left-20 ml-2">
        <ul className="flex flex-col justify-center items-center">
          <li className="mb-8 ">
            <LinkedInIcon className="fill-white opacity-50 w-8 h-8 hover:opacity-100 transition duration-300" />
          </li>
          <li className="mb-8">
            <GithubIcon className="fill-white opacity-50 w-8 h-8 hover:opacity-100 transition duration-300" />
          </li>
          <li>
            <div className="h-40 w-0 border-2 opacity-50" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
