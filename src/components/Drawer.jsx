import SearchBox from "./feature-components/Search";
import { Sun } from "react-feather";

const Drawer = () => {
  return (
    <div className="bg-white rounded-l-[20px] p-4 w-[20%]">
      <div className="flex flex-col">
        <SearchBox />
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center ">
            <Sun className="text-sm mr-2"/>
          </div>
          <div className=" flex">
            <h2 className="text-sm inline flex-1">Temperature</h2>
            <div>
              <h3 className="text-sm   inline mr-2 flex-1">Date,</h3>
              <p className="text-sm inline flex-2">Time</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="border-t flex-grow"></div>
          <div className="flex justify-between w-full ml-4 flex-col">
            <div className="flex items-center flex-1">
              <p className="text-sm mr-2">Icon</p>
              <div className="text-sm">Icon</div>
            </div>
            <div className="flex items-center flex-1">
              <p className="text-sm mr-2">Icon</p>
              <div className="text-sm">Icon</div>
            </div>
            <div className="flex-3">
              <img src="" alt="background img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
