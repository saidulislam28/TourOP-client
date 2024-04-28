import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import SingleSpot from "../component/SingleSpot";



const Home = () => {


  const spots = useLoaderData();
const slicedSpot = spots.slice(0,6);
console.log(slicedSpot);

  return (
    <div className="container mx-auto">
     
      <Banner></Banner>
      <h1 className="text-5xl">{spots.length}</h1>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">


      {
        slicedSpot.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
      }


     </div>
    </div>
  );
};

export default Home;