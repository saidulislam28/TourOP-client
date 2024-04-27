import { Link } from "react-router-dom";

const SingleSpot = ({ spot }) => {

const { spotName,season, cost , travelTime, image, visitors} = spot;



  return (
    <div className="card card-compact bg-base-100 border shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{spotName}</h2>
        <p>{season}</p>
        <div className="card-actions justify-end">
          <Link to={`/spot/${spot._id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSpot;
