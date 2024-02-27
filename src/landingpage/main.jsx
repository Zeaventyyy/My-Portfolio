import React from 'react';

function Main() {
  const job = 'IT Professional';
  const name = 'Zeaven Manalastas';
  return (
    <div className="flex justify-center items-center h-full">
      <section className="text-white ">
        <h1 className="text-2xl sm:text-5xl pb-3 font-medium">{name}</h1>
        <h2 className="text-sm sm:text-base uppercase text-center sm:tracking-[1.075rem] tracking-[0.25rem] sm:-mr-4 -mr-1">
          {job}
        </h2>
      </section>
    </div>
  );
}

export default Main;
