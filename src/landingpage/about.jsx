import React from 'react';

function About() {
  return (
    <div className="h-full px-10 sm:px-80">
      <div className="flex flex-row justify-center items-center h-full ">
        <section className="flex items-center text-white ">
          <h1 className="text-base sm:text-2xl pb-3 font-medium">
            Hi I&apos;m Zeaven Jovertte Manalastas. I was an android developer
            in my last work and decided to do front end web development. I have
            been studying vuejs and reactjs to use it on my future work.
          </h1>
        </section>
        <section className="flex items-center text-white sm:w-full sm:h-full fill-white">
          <svg
            className="
                transform
                hover:rotate-90
                transition
                duration-500
                "
            viewBox="0 0 470 470"
          >
            <path
              d="M89.000,61.000 L89.000,56.000 L384.000,56.000 L384.000,61.000 L89.000,61.000 Z"
              className="cls-1"
            />
            <path
              d="M89.000,415.000 L89.000,410.000 L384.000,410.000 L384.000,415.000 L89.000,415.000 Z"
              className="cls-1"
            />
            <path
              d="M92.996,412.505 L89.004,409.495 L267.004,173.495 L270.996,176.505 L92.996,412.505 Z"
              className="cls-1"
            />
            <path
              d="M205.996,296.505 L202.004,293.495 L380.004,57.495 L383.996,60.505 L205.996,296.505 Z"
              className="cls-1"
            />
            <path
              d="M89.005,60.507 L92.995,57.493 L225.995,233.493 L222.005,236.507 L89.005,60.507 Z"
              className="cls-1"
            />
            <path
              d="M384.003,409.504 L379.997,412.496 L246.997,234.496 L251.003,231.504 L384.003,409.504 Z"
              className="cls-1"
            />
          </svg>
        </section>
      </div>
    </div>
  );
}
export default About;
