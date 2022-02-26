import React from 'react';

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
      <section>
        <a href="/">
          <svg
            className="
                inline
                self-center
                transform
                hover:rotate-90
                transition
                duration-500

                "
            preserveAspectRatio="xMidYMid"
            fill="white"
            width="50"
            height="50"
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
          Contact
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
          Project
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
