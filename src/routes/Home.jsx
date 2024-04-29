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
    <div className="border rounded-xl my-10 p-4">
    <h1 className="text-4xl  mb-5 text-center font-serif ">Explore Exotic Destinations with Our  <br /> Tourist Place Cards</h1>
      <h5 className="text-lg font-semibold opacity-50 text-center mb-10">Unveil global wonders with our tourist place cards. Dive into culture, adventure, <br /> and natural beauty effortlessly.</h5>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">


      {
        slicedSpot.map(spot => <SingleSpot key={spot._id} spot={spot}></SingleSpot>)
      }


     </div>
    </div>
    </div>
  );
};

export default Home;