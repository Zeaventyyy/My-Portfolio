import React from 'react';

function Contact() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row md:justify-center md:items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full text-white justify-center md:justify-center md:h-full">
          <div className="flex justify-start mb-5 w-full">
            <p className="text-lg md:text-2xl mr-10 font-semibold ">
              What&apos;s Next?
            </p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>
          <div className="flex flex-col justify-center items-center mb-10 w-full">
            <p className="text-2xl md:text-5xl md:my-10 md:mb-5 mb-5 font-semibold ">
              Get In Touch
            </p>
            <p className="text-sm md:text-base text-center">
              If ever I got you interested through my portfolio. Whether you
              have some questions or you just want to say hi, My inbox is always
              open and I&apos;ll try my best to reply back to you.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-10 w-full">
            <a
              className="email-link w-1/2 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/50 hover:bg-black/70 md:py-4 md:text-lg md:px-10"
              href="zeavenjoverttemanalastas@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Say Hello
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
