import React, { useState } from 'react';
import styles from './experience.module.css';

function Experience() {
  const [experience, setExperience] = useState('cmai');

  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full text-white justify-center md:justify-start md:h-60">
          <div className="flex justify-start mb-5 w-full">
            <p className="text-2xl mr-10 font-medium ">Where I’ve Worked</p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start w-full  ">
            <div className="flex w-full grow flex-row md:flex-col items-start md:pl-6 md:mb-0 md:w-[17.25rem] mb-4 ">
              <button
                className={`${experience === 'cmai' ? styles.active : ''} ${
                  styles.btn
                } border-r-2`}
                type="button"
                onClick={() => setExperience('cmai')}
              >
                CMAI
              </button>
              <button
                className={`${
                  experience === 'orangeApps' ? styles.active : ''
                } ${styles.btn} border-l-2`}
                type="button"
                onClick={() => setExperience('orangeApps')}
              >
                Orange Apps
              </button>

              <span className="hidden md:block border-[1px] opacity-50 self-end w-1/2 mt-8  " />
            </div>

            {experience === 'cmai' ? (
              <div className="md:pl-10 animate-fade-in-down">
                <p className="text-xl font-semibold mb-1">
                  Associate Android Developer
                </p>
                <p className="font-normal">@Clearmind Algorithmics Inc.</p>
                <p className="font-normal">November 2019 - March 2021</p>
                <div className="flex flex-col">
                  <ul className="list-disc list-outside ml-4 ">
                    <li className="mt-4 mb-2">
                      Worked with a team to build new applications.
                    </li>
                    <li>
                      Maintained existing applications (USSC Super Service App,
                      myTMC).
                    </li>
                  </ul>
                  <p className="border-[1px] opacity-50 self-end w-1/2 mt-8  " />
                </div>
              </div>
            ) : null}
            {experience === 'orangeApps' ? (
              <div className="md:pl-10 grow animate-fade-in-down">
                <p className="text-xl font-semibold mb-1">
                  Frontend Developer/Quality Assurance Intern
                </p>
                <p className="text-xl font-semibold mb-1">OrangeApps.</p>
                <p className="font-normal">January 2019 - March 2019</p>
                <div className="flex flex-col">
                  <ul className="list-disc list-outside ml-4">
                    <li className="mt-4 mb-2">
                      Maintained and checked all the possible bugs in projects
                      to be fixed.
                    </li>
                    <li>
                      Designed and built prototypes for company’s new projects.
                    </li>
                  </ul>
                  <span className="border-[1px] opacity-50 self-end w-1/2 mt-8  " />
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Experience;
