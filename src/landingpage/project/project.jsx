import React from 'react';

function Project() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full text-white justify-center md:justify-start md:h-60">
          <div className="flex justify-start mb-5 w-full">
            <p className="text-lg md:text-2xl mr-10 font-semibold ">
              Some of my Projects
            </p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start w-full justify-center text-6xl">
            Work in Progress
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
