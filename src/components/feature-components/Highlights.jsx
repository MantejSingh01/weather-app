const Highlights = () => {
    const fixedLengthArray = Array.from({ length: 6 });
  
    return (
      <div className="p-6 flex flex-col">
        <h1 className="flex flex-1">Today's Highlights</h1>
        <div className="flex flex-wrap ">
          {fixedLengthArray.map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-2/6 sm:h-12 md:h-1/6 lg:h-3/6 px-2 mb-4">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center flex-col"> 
              <h2 className="text-lg font-semibold mr-auto">Day</h2> 
              <p className="text-sm mr-2">Icon</p> 
              <p className="text-sm">Temperature</p>
            </div>
          </div>          
          ))}
        </div>
      </div>
    );
  };
  
  export default Highlights;
  