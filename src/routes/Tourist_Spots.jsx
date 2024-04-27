import { useLoaderData } from "react-router-dom";
import SingleSpot from "../component/SingleSpot";

const Tourist_Spots = () => {


const spots = useLoaderData();


  return (
    <div>
      <h1 className="text-6xl">this is all tourist {spots.length}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {
          spots.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
        }
      </div>


    </div>
  );
};

export default Tourist_Spots;