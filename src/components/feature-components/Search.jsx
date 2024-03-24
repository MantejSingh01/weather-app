import React from "react";
import { Search , Compass} from 'react-feather';

const SearchBox =()=>{
    return(
        <div className="flex flex-1 pb-4  content-center flex-wrap p-2 ">
            <div className="flex  flex-row justify-between content-center">
                <Search className="p-1">icon</Search>
                <input type="text" placeholder="Search for places..." value={""} focus />
                <Compass className="p-1">icon</Compass>
            </div>
        </div>
    )
}

export default SearchBox;