import React, { useState } from 'react';
import styles from './experience.module.css';

function Experience() {
  const [experience, setExperience] = useState('cmai');

  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full text-white justify-center md:justify-start">
          <div className="flex justify-start mb-5 w-full">
            <p className="text-lg md:text-2xl mr-10 font-semibold ">
              Where I’ve Worked
            </p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start w-full  ">
            <div className="flex w-full grow flex-row md:flex-col items-start md:pl-6 md:mb-0 md:w-[15.75rem] mb-4 ">
              <button
                className={`${experience === 'cmai' ? styles.active : ''} ${
                  styles.btn
                }`}
                type="button"
                onClick={() => setExperience('cmai')}
              >
                CMAI
              </button>
              <button
                className={`${
                  experience === 'orangeApps' ? styles.active : ''
                } ${styles.btn}`}
                type="button"
                onClick={() => setExperience('orangeApps')}
              >
                Orange Apps
              </button>

              <span className="hidden md:block border-[1px] opacity-50 self-end w-1/2 mt-8  " />
            </div>

            {experience === 'cmai' ? (
              <div className="md:pl-10 animate-fade-in-down md:w-3/4">
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Associate Android Developer
                </p>
                <p className="font-normal">Clearmind Algorithmics Inc.</p>
                <p className="font-normal">November 2019 - March 2021</p>

                <div className="flex flex-col">
                  <ul className="list-disc list-outside ml-4 ">
                    <li className="mt-4 mb-2">
                      Worked with a team that consist of 4 members to build new
                      applications and provided services to our company’s
                      clients.
                    </li>
                    <li>
                      Maintained and helped adding new features to their
                      existing applications (USSC Super Service App, myTMC,
                      Super Negosyo, Super Ayuda).
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 justify-end">
                    <div className={styles.pill}>Kotlin</div>
                    <div className={styles.pill}>Java</div>
                    <div className={styles.pill}>Firebase</div>
                    <div className={styles.pill}>Retrofit</div>
                    <div className={styles.pill}>Cache Manager</div>
                    <div className={styles.pill}>Git</div>
                  </div>

                  <span className="border-[1px] opacity-50 self-end w-1/2 mt-8  " />
                </div>
              </div>
            ) : null}
            {experience === 'orangeApps' ? (
              <div className="md:pl-10 animate-fade-in-down md:w-3/4">
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Frontend Developer/Quality Assurance Intern
                </p>
                <p className="font-normal">OrangeApps</p>
                <p className="font-normal">November 2018 - March 2019</p>
                <div className="flex flex-col">
                  <ul className="list-disc list-outside ml-4">
                    <li className="mt-4 mb-2">
                      Conducted manual testing to check all the possible bugs in
                      a project and provided all the test scenarios used in
                      testing
                    </li>
                    <li>
                      Designed and built 2d prototypes for company&apos; new
                      project using Adobe XD (specifically for MedDepot)
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 justify-end">
                    <div className={styles.pill}>HTML</div>
                    <div className={styles.pill}>CSS</div>
                    <div className={styles.pill}>Adobe XD</div>
                    <div className={styles.pill}>Git</div>
                  </div>
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
