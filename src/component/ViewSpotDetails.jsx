import { useLoaderData, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ViewSpotDetails = () => {
  const spots = useLoaderData();
  console.log(spots);
  const { id } = useParams();

  const spot = spots.find((spot) => spot._id === id);

  const {
    name,
    spotName,
    countryName,
    location,
    season,
    cost,
    travelTime,
    visitors,
    image,
    email,
    description,
  } = spot;

  console.log(
    // name,
    // spotName,
    // countryName,
    // location,
    // season,
    // cost,
    // travelTime,
    // visitors,
    // image,
    // email,
    description
  );

  return (
    <div>
      <h2 className="text-7xl mt-10 text-center font-semibold font-serif">
        Find you desire Place
      </h2>
      <div
        className="w-full h-full lg:h-80 rounded-xl dark:bg-gray-500 container mx-auto my-20"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1
            className="text-5xl antialiased font-extrabold leading-none text-center
        text-white  dark:text-gray-800"
          >
            {spotName}
          </h1>
          <p
            className="pt-2 pb-8 text-xl antialiased text-center 
        text-white dark:text-gray-800"
          >
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <h4 className="text-white font-bold text-2xl text-center">
              Discover the beauty of natures wonder, <br /> an adventure awaits
              at our breathtaking tour destination
            </h4>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center  rounded-xl">
        <p className="bg-stone-300 px-4 py-2 rounded-xl  font-semibold">Description</p>

        <Marquee className="bg-gray-300 rounded-r-xl">
         <span className="mr-32">{description}</span>
        </Marquee>
      </div>

      <div className="container mx-auto my-5 border rounded-xl border-violet-400">
        <div className="dark:bg-gray-100 text-gray-100 dark:text-gray-800">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-white dark:bg-gray-50">
            <div className="flex items-center justify-between">
              <span
                className="text-4xl
              text-black font-bold dark:text-gray-600"
              >
                Place: {spotName}
              </span>
              <h4
                className="px-2 py-1 font-bold rounded bg-violet-200 dark:bg-violet-600 text-black
               dark:text-gray-50
               text-3xl"
              >
                <span className="text-xl font-normal">Country:</span>{" "}
                {countryName}
              </h4>
              
            </div>
            <div className="divider"></div>
            <div className="mt-3 space-y-5">
              <h4 className="text-2xl font-bold text-black">
                <span className="text-lg font-normal">Season: </span>
                {season}
              </h4>
              <div className="divider"></div>
              <h4 className="text-2xl font-bold text-black">
                <span className="text-lg font-normal">Time: </span> {travelTime}
              </h4>
              <div className="divider"></div>
              <h4 className="text-2xl font-bold text-black">
                <span className="text-lg font-normal">Season: </span>
                {location}
              </h4>
              <div className="divider"></div>
              <h4 className="text-2xl font-bold text-black">
                <span className="text-lg font-normal">Visitors Per Year: </span>
                {visitors}
              </h4>
              <div className="divider"></div>
              <h4 className="text-2xl font-bold text-black">
                <span className="text-lg font-normal"> Total Cost: </span>
                {cost}
              </h4>
              <div className="divider"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p
               
                className="hover:underline text-violet-500 dark:text-violet-600 text-xl"
              >
                <span className="text-violet-800">Email</span> : {email}
              </p>
              <div>
                <p
                  className="flex items-center"
                >
                  <span className="hover:underline text-gray-400 dark:text-gray-600 text-2xl font-semibold text-violet-500">
                    {name}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSpotDetails;
