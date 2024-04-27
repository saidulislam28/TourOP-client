import { useLoaderData, useParams } from "react-router-dom";

const ViewSpotDetails = () => {

const spots = useLoaderData();
console.log(spots);
const {id} = useParams();



const spot = spots.find((spot) => spot._id === id)
console.log(spot);


  return (
    <div>
      <h1 className="text-5xl">

      this is spot details for {spot.spotName}
      </h1>
    </div>
  );
};

export default ViewSpotDetails;