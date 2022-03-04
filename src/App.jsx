import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import styles from './landingpage/navbar/navbar.module.css';
import { ReactComponent as ZeavenLogo } from './icons/zeavenlogo.svg';
import Main from './landingpage/main';
import About from './landingpage/about';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import Experience from './landingpage/experience/experience';
import Project from './landingpage/project/project';

function App() {
  const github = 'https://github.com/Zeaventyyy';

  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="App ">
      <div className="flex flex-col background h-screen">
        <nav
          className="flex
    flex-row
    pl-8
    pr-10
    md:px-20
    justify-between
    items-center
    py-8
    text-white
    uppercase
    absolute
    h-36
    w-full"
        >
          <section className="">
            <a href="/">
              <ZeavenLogo
                className="inline
                self-center
                transform
                hover:rotate-90
                transition
                duration-500
                h-10
                w-10
                md:w-14
                md:h-14
                "
              />
            </a>
          </section>
          <section className="hidden md:flex md:flex-row h-full items-center">
            <a href="/#about" className={`${styles.navbtn}`}>
              About
            </a>
            <a href="/#experience" className={`${styles.navbtn}`}>
              Experience
            </a>
            <a href="/#project" className={`${styles.navbtn}`}>
              Project
            </a>
            <a href="/#contact" className={` ${styles.navbtn}`}>
              Contact
            </a>
          </section>
          <section className="md:hidden items-center space-x-1">
            <Menu as="div" className="inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
                  <button type="button" onClick={toggleMenu}>
                    <div className={`${styles.hamburger}`}>
                      <div className={`${styles.btn}`} />
                      <div className={`${styles.btn}`} />
                      <div className={`${styles.btn}`} />
                    </div>
                  </button>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-9 left-9 text-center mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#about"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          About
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#experience"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Experience
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#project"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Project
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#contact"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Contact
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </section>
        </nav>
        <Main />
      </div>
      <div id="about" className="backgroundAbout h-screen">
        <About />
      </div>
      <div id="experience" className="background h-screen">
        <Experience />
      </div>
      <div className="hidden md:block fixed bottom-0 left-20 ml-2">
        <ul className="flex flex-col justify-center items-center">
          <li className="mb-8 ">
            <a href="https://www.linkedin.com/in/zeaven-jovertte-manalastas-5297a7188/">
              <LinkedInIcon className="fill-white opacity-50 w-8 h-8 hover:opacity-100 transition duration-300" />
            </a>
          </li>
          <li className="mb-8">
            <a href={github}>
              <GithubIcon className="fill-white opacity-50 w-8 h-8 hover:opacity-100 transition duration-300" />
            </a>
          </li>
          <li>
            <div className="h-40 w-0 border-2 opacity-50" />
          </li>
        </ul>
      </div>
      <div id="project" className="backgroundAbout h-screen">
        <Project />
      </div>
    </div>
  );
}

export default App;
