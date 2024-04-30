import { useLoaderData } from "react-router-dom";
import SingleSpot from "../component/SingleSpot";
import Slider from "../component/Slider";
import Banner from "../component/Banner";
import AllCountry from "../component/AllCountry";
import Faq from "../component/Faq";
import {  useTypewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const Home = () => {

  const [typewriter]= useTypewriter({
    words:['for discount','use- TourOP'],
    loop:{},
    typeSpeed:100,
    
  })
  const [typewriter1]= useTypewriter({
    words:['Find Your Dream Country','Find Your Dream Country'],
    loop:{},
    typeSpeed:100,
    
  })


  const spots = useLoaderData();
  const slicedSpot = spots.slice(0, 6);

  return (
    <div className="container mx-auto">



      <div>
        <div className="">
          <Banner></Banner>
        </div>
        <div className="p-4">
          <div className="p-6 py-4 
          bg-black text-white border
          dark:bg-violet-600 dark:text-gray-50 rounded-xl">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <Fade duration={5000}>
                <h2 className="text-center text-4xl mr-4 tracking-tighter font-bold">
                  Up to
                  <br className="sm:hidden" />
                  50% Off
                </h2>

                </Fade>
                <div className="space-x-2 text-center py-2 lg:py-0 mr-4">
                  <span>Plus free shipping! Use code:</span>
                  <span className="font-bold text-lg "><span>{typewriter}</span></span>
                </div>
                <a
                  href="#"
                  rel="noreferrer noopener"
                  className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-xl my-10 p-4">
        <h1 className="text-4xl  mb-5 text-center font-serif ">
          Explore Exotic Destinations with Our <br /> Tourist Place Cards
        
        </h1>
        <h5 className="text-lg font-semibold opacity-50 text-center mb-10">
          Unveil global wonders with our tourist place cards. Dive into culture,
          adventure, <br /> and natural beauty effortlessly.
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {slicedSpot.map((spot) => (
            <SingleSpot key={spot._id} spot={spot}></SingleSpot>
          ))}
        </div>
      </div>


      <div  className="mt-10 border rounded-xl p-2">

      <h2
          className=" my-16 text-2xl text-center lg:text-4xl font-serif bg-slate-300 p-8 rounded-xl"
        >
         {typewriter1}
        </h2>


        <AllCountry></AllCountry>
      </div>






      <div className="mt-10 border rounded-xl p-2">
        <h2
          className="text-center text-3xl font-bold font-sans
          my-5 "
        >
          Explore some of our collection
          <br /> what we provide to you
        </h2>
        <h6 className="text-lg text-center font-semibold opacity-50">
          Scroll bar is below the images{" "}
        </h6>

        <Slider></Slider>

      </div>
        <div className="my-10 border bg-slate-300">
          <Faq></Faq>
        </div>
    </div>
  );
};

export default Home;
