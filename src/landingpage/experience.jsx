import React from 'react';

function Experience() {
  return (
    <div className="h-full container mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center h-full px-10 lg:w-[52rem] mx-auto ">
        <section className="flex flex-col w-full justify-center items-center text-white text-justify">
          <div className="flex justify-start mb-5 w-full">
            <p className="text-2xl mr-10 font-medium ">Where I’ve Worked</p>
            <p className="flex-grow border-[1px] opacity-50 self-center" />
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start w-full">
            <div className="flex flex-row md:flex-col items-start md:px-6 w-64 mr-4">
              <button
                className="hover:bg-black/25
                hover:border-white
                border-b-2
                md:border-b-0
                md:border-l-2 border-white/50
              active:hover:border-white
              active:hover:border-l-2
              active:transition
              active:duration-500
              transition
              duration-500
              px-8
              py-2
              w-full
              h-full
              text-center
              md:text-left
              "
                type="button"
              >
                CMAI
              </button>
              <button
                className="hover:bg-black/25
                hover:border-white
                border-b-2
                md:border-b-0
                md:border-l-2 border-white/50
              active:hover:border-white
              active:hover:border-l-2
              active:transition
              active:duration-500
              transition
              duration-500
              px-8
              py-2
              w-full
              h-full
              text-center
              md:text-left
              "
                type="button"
              >
                Orange Apps
              </button>
            </div>
            <div className="grow">
              <h1>Clearmind Algorithmics Inc.</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Experience;
