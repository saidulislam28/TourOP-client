import { useLoaderData } from "react-router-dom";
import SingleSpot from "../component/SingleSpot";
import AllDataCard from "../component/AllDataCard";

const Tourist_Spots = () => {
  const spots = useLoaderData();

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl">this is all tourist {spots.length}</h1>



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
