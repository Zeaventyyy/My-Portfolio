import React from 'react';
import { ReactComponent as ZeavenLogo } from '../icons/zeavenlogo.svg';

function About() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col items-center text-white text-justify">
          <div className="w-full flex justify-start mb-5">
            <span className="text-lg md:text-2xl mr-10 font-semibold ">
              About Me
            </span>
            <span className="flex-grow border-[1px] opacity-50 self-center" />
          </div>

          <p className="text-sm sm:text-base pb-3 font-medium ">
            Hello! I&apos;m Zeaven Jovertte Manalastas and I enjoy building
            things that live on the internet. My web development journey started
            way back 2019 when I was an intern. I stopped for the meantime and
            become an android developer for a year and a 5 months.
          </p>
          <p className="text-sm sm:text-base font-medium">
            Fast-forward to today, I&apos;ve been studying front end frameworks
            and libraries to use them on my future projects and works.
          </p>
        </section>
        <section className="sm:flex self-end sm:items-center -mr-2 mt-4 text-white sm:h-full fill-white">
          <ZeavenLogo
            className="inline
                transform
                hover:rotate-90
                transition
                duration-500
                w-20
                h-20
                sm:w-[16rem]
                sm:h-[16rem]
                "
          />
        </section>
      </div>
    </div>
  );
}
export default About;
