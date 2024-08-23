import React from 'react';

const PopularAreas = () => {
  return (
    <div>
    <div className="p-4 mt-10">
      <h4 className="text-lg mx-[250px]  mb-4">
        Search
        <span className="text-black underline font-semibold ml-1">all of Ireland</span>, or search by popular areas
      </h4>

      {/* Headings Row */}
      <div className="flex justify-between gap-8 pb-4 mx-[250px] ">
        <div className="flex-1 text-center">
          <h5 className="text-md ">District</h5>
        </div>
        <div className="flex-1 text-center">
          <h5 className="text-md ">Dublin City</h5>
        </div>
        <div className="flex-1 text-center">
          <h5 className="text-md ">Dublin County</h5>
        </div>
        <div className="flex-1 text-center">
          <h5 className="text-md ">Towns & Cities</h5>
        </div>
      </div>
      <hr />
      {/* Content Section */}
      <div className="flex justify-between gap-8 mt-4 pb-4 0 mx-[250px]">
        {/* District Section */}
        <div className="flex-1">
          <ul className=" space-y-4">
            <li><span className="">Cork City Centre</span></li>
            <li><span className="">Cork City Suburbs</span></li>
            <li><span className="">Cork Commuter Towns</span></li>  
            <li><span className="">Cork: West Cork</span></li>
            <li><span className="">Cork: East Cork</span></li>
          </ul>
        </div>

        {/* Dublin City Section */}
        <div className="flex-1">
          <ul className=" space-y-4">
            <li><span className="">Dublin City Centre</span></li>
            <li><span className="">Dublin City, North</span></li>
            <li><span className="">Dublin City, South</span></li>
          </ul>
        </div>

        {/* Dublin County Section */}
        <div className="flex-1">
          <ul className="    space-y-4">
            <li><span className="">Dublin County, North</span></li>
            <li><span className="">Dublin County, South</span></li>
            <li><span className="">Dublin County, West</span></li>
            <li><span className="">Dublin Commuter Towns</span></li>
          </ul>
        </div>

        {/* Towns & Cities Section */}
        <div className="flex-1">
          <ul className=" space-y-4">
            <li><span className="">Galway City Centre</span></li>
            <li><span className="">Galway City Suburbs</span></li>
            <li><span className="">Galway Commuter Towns</span></li>
          </ul>
        </div>
      </div>
     
    </div>
    <hr />
    </div>
  );
};

export default PopularAreas;
