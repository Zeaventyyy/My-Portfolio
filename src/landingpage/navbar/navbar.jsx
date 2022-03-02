import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ReactComponent as ZeavenLogo } from '../../icons/zeavenlogo.svg';
import styles from './navbar.module.css';

function Navbar() {
  const github = 'https://github.com/Zeaventyyy';
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <nav
      className="flex
    flex-row
    px-5
    sm:px-20
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
                w-14
                h-14
                "
          />
        </a>
      </section>
      <section className="hidden md:flex md:flex-row h-full items-center">
        <a href="/" className={`${styles.navbtn}`}>
          About
        </a>
        <a href="/" className={`${styles.navbtn}`}>
          Experience
        </a>
        <a href={github} className={`${styles.navbtn}`}>
          Github
        </a>
        <a href="/" className={` ${styles.navbtn}`}>
          Contact
        </a>
      </section>
      <section className="md:hidden items-center space-x-1">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      Work
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm',
                        )}
                      >
                        Github
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </section>
    </nav>
  );
}

export default Navbar;
