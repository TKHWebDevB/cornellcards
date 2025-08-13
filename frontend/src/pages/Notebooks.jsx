import React from 'react';
import NavBar from '../components/NavBar';

const Notebooks = () => {
  return (
    <div>
      <NavBar />
      <h1>Notebooks</h1>
      {/* main container */}
      <div>
        {/* top container */}
        <div className="border-2 h-6 w-80 flex flex-row place-content-between">
          <div className="flex justify-center align-middle  w-[20%] border-r-2">
            {/* top-left container */}
            Name
          </div>
          <div className="flex justify-center align-middle w-full">
            {/* top-right container */}
            Last Updated
          </div>
        </div>
        <div className="flex flex-row place-content-between h-[200px] w-80 border-l-2 border-b-2 border-r-2">
          {/* bottom container */}
          <div className="border-r-2 w-[20%] h-[200px]">
            {/* bottom-left container */}
          </div>
          <div className="flex justify-center align-middle w-full">
            {/* bottom-right container */}
          </div>
        </div>
      </div>
      <button>
        <a href="/dashboard">Dashboard</a>
      </button>
    </div>
  );
};

export default Notebooks;
