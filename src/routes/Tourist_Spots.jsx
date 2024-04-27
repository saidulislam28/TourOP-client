import { useLoaderData } from "react-router-dom";
import SingleSpot from "../component/SingleSpot";

const Tourist_Spots = () => {
  const spots = useLoaderData();

  return (
    <div>
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





      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {spots.map((spot) => (
          <SingleSpot key={spot._id} spot={spot}></SingleSpot>
        ))}
      </div>
    </div>
  );
};

export default Tourist_Spots;
