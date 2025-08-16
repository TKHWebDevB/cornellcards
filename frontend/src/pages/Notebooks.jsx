import NavBar from '../components/NavBar';

const Notebooks = () => {
  // TODO: Replace 'last updated' value with a 'pages' value instead
  // TODO: on-click for the 'Create page' button should redirect to 'Create Page' page
  // TODO: on-click for the 'Create notebook' button should redirect to the 'Create Notebook' page
  // TODO: on-click for the Page Title should redirect to the '/notebook/edit/:notebookID' page

  return (
    <div className="flex flex-col justify-center w-full">
      <NavBar />
      <h1>Notebooks</h1>
      {/* main container */}
      <div className="w-full">
        <div className="border-2 h-6 w-full flex flex-row place-content-between">
          {/* top-left container */}
          <div className="flex justify-center align-middle  w-[20%] border-r-2">
            Name
          </div>
          {/* top-right container */}
          <div className="flex justify-center align-middle w-full">
            Last Updated
          </div>
        </div>
        {/* bottom container */}
        <div className="flex flex-row place-content-between h-[200px] w-96 border-l-2 border-b-2 border-r-2">
          {/* bottom-left container */}
          <div className="border-r-2 w-[20%] h-[200px]">
            {/* DUMMY DATA FOR NOTEBOOK TITLE */}
          </div>
          {/* bottom-right container */}
          <div className="flex justify-center align-middle w-full">
            <span>
            {/* DUMMY DATA FOR PAGE TITLE */}
            </span>
          </div>
        </div>
      </div>
      <button className="w-32">
        <a href="/dashboard">Dashboard</a>
      </button>
    </div>
  );
};

export default Notebooks;
