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
            <div className="flex w-full flex-row md:flex-col items-start md:pl-6 md:mb-0 md:w-[17.25rem] mb-4">
              <button
                className="hover:bg-black/25
                hover:border-white
                border-b-2
                md:border-b-0
                md:border-l-2 border-white/50
              active:transition
              active:duration-500
              transition
              duration-500
              focus:border-b-2
              focus:border-white
              focus:bg-black/50
              md:focus:border-l-2
              md:focus:border-b-0
              md:focus:border-white
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
                focus:border-b-2
                focus:border-white
              active:transition
              active:duration-500
              focus:bg-black/50
              md:focus:border-l-2
              md:focus:border-white
              md:focus:border-b-0
              focus:md:
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
              <p className="hidden md:block border-[1px] opacity-50 self-end w-1/2 mt-8  " />
            </div>
            <div className=" md:pl-10 grow">
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
            <div className="hidden md:pl-10 grow">
              <p className="text-xl font-semibold mb-1">
                Frontend Developer/Quality Assurance Intern
              </p>
              <p className="text-xl font-semibold mb-1">OrangeApps.</p>
              <p className="font-normal">January 2019 - March 2019</p>
              <div className="flex flex-col">
                <ul className="list-disc list-outside ml-4">
                  <li className="mt-4 mb-2">
                    <p>
                      Maintained and checked all the possible bugs in projects
                      to be fixed.
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed and built prototypes for company’s new projects.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Experience;
