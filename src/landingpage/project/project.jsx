import React from 'react';
import SavingzTracker from '../../icons/savingztracker.png';
import Eyesense from '../../icons/eyesense.png';

function Project() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full text-white justify-center md:justify-center md:h-full">
          <div className="flex justify-start mb-10 w-full">
            <p className="text-lg md:text-2xl mr-10 font-semibold ">
              Some of my Projects
            </p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="h-full w-1/2 relative top-0 right-0">
                <img
                  src={SavingzTracker}
                  alt="Savingz Tracker"
                  className="rounded-md"
                />
                <div className="h-full w-full absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50 hover:bg-transparent transition duration-500" />
              </div>
              <div className="flex flex-col items-end pl-10 text-right grow">
                <div className="absolute w-1/4">
                  <p className="text-lg md:text-xl font-semibold ">
                    Savingz Tracker
                  </p>
                  <p className="bg-[#0e0f14] p-4 mt-4 rounded-md">
                    A web application I created as a practice for Vue Js. It
                    allows user to track all their goals and savings.
                  </p>
                  <ul className="uppercase font-medium text-sm mt-4">
                    <li className="inline pr-2">html</li>
                    <li className="inline pr-2">css</li>
                    <li className="inline pr-2">javascript</li>
                    <li className="inline">vuejs</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="border-[1px] opacity-50 self-start w-3/5 mt-8" />
            <div className="flex flex-row-reverse justify-between mt-16">
              <div className="h-full w-1/2 items-end relative top-0 right-0">
                <img src={Eyesense} alt="Eyesense" className="rounded-md" />
                <div className="h-full w-full absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50 hover:bg-transparent transition duration-500" />
              </div>
              <div className="flex flex-col text-left grow">
                <div className="absolute w-1/4">
                  <p className="text-lg md:text-xl font-semibold ">EyeSense</p>
                  <p className="bg-[#0e0f14] p-4 mt-4 rounded-md">
                    An android application I created for my thesis. It provides
                    assistance for vision impared person by use of voice
                    recognition and gestures.
                  </p>
                  <ul className="uppercase font-medium text-sm mt-4">
                    <li className="inline pr-2">C</li>
                    <li className="inline pr-2">Java</li>
                    <li className="inline pr-">XML</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="border-[1px] opacity-50 self-end w-3/5 mt-8" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
