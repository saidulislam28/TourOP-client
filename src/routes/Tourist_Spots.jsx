import { useLoaderData } from "react-router-dom";

import AllDataCard from "../component/AllDataCard";

const Tourist_Spots = () => {
  const spots = useLoaderData();

  return (
    <div className="container mx-auto border mt-5 rounded-xl p-4">
      <h1 className=" my-16 text-2xl text-center lg:text-4xl font-serif bg-slate-300 p-8 rounded-xl"> Discover Your Dream Destination:  Find Your <br /> Perfect Getaway Here</h1>



      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>sort by low cost</a>
          </li>
          <li>
            <a>sort by high cost</a>
          </li>
        </ul>
      </div>





      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {spots.map((spot) => (
          <AllDataCard key={spot._id}
          spot={spot}
          ></AllDataCard>
        ))}
      </div>
    </div>
  );
};

export default Tourist_Spots;
