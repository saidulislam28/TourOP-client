import React from "react";
import { Link } from "react-router-dom";

const AllDataCard = ({ spot }) => {
  const { image, spotName, cost, visitors, travelTime, season } = spot;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      <figure className="w-64">
        <img className="rounded-xl h-full" src={image} alt="no image found" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="font-normal text-lg">Name:</span> {spotName}
        </h2>
        <p>
          Travel-Time: <span className="font-semibold">{travelTime}</span>{" "}
        </p>
        <p>
          season: <span className="font-semibold">{season}</span>{" "}
        </p>
        <p>
          Visitors: <span className="font-semibold">{visitors}</span>{" "}
        </p>
        <p>
          Cost: <span className="font-semibold">{cost}</span>{" "}
        </p>
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

export default AllDataCard;
