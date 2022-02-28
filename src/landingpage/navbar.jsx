import React from 'react';
import { ReactComponent as ZeavenLogo } from '../icons/zeavenlogo.svg';

function Navbar() {
  const github = 'https://github.com/Zeaventyyy';

  return (
    <nav
      className="flex
    flex-row
    px-5
    sm:px-20
    justify-between
    py-8
    text-white
    uppercase
    absolute
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

      <section className="hidden md:flex items-center space-x-1">
        <a
          href="/"
          className="
            flex
            items-center
            h-full
              hover:border-white
              border-b-2 border-transparent
              transition
              duration-500
              px-5
            "
        >
          About
        </a>
        <a
          href="/"
          className="
            h-full
            flex
            items-center
              hover:border-white
              border-b-2 border-transparent
              transition
              duration-500
              px-5
            "
        >
          Experience
        </a>
        <a
          href={github}
          className="
            h-full
            flex
            items-center
              hover:border-white
              border-b-2 border-transparent
              transition
              duration-500
              px-5
            "
        >
          Github
        </a>
        <a
          href="/"
          className="h-full
            flex
            items-center
            hover:border-white
            border-b-2 border-transparent
            transition
            duration-500
            px-5"
        >
          Contact
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
