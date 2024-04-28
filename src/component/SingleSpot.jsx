import { Link } from "react-router-dom";

const SingleSpot = ({ spot }) => {

const { spotName,season, cost , travelTime, image, visitors} = spot;



  return (
    <div className="card card-compact bg-base-100 border shadow-xl">
      <figure>
        <img className="h-60"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spotName}</h2>
        <p className="text-lg">Time: <span className="text-lg font-semibold">{travelTime}</span> </p>
        <p className="text-lg">Season: <span className="text-lg font-semibold">{season}</span> </p>
        <p className="text-lg">Visitor per year: <span className="text-lg font-semibold">{visitors}</span> </p>
        <p className="text-lg">Cost P.P: <span className="text-lg font-semibold">{cost}</span> </p>
        
        <div className="card-actions justify-end">
        <Link to={`/spot/${spot._id}`}>
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View Details</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSpot;
