import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

const MyList = () => {
  const [loading, setLoading] = useState(true);
  const allspots = useLoaderData();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const mySpot = allspots.filter((spot) => spot.email === user.email);

  console.log(mySpot);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl my-10 text-center">You added {mySpot.length} items in your list </h1>
      <div className="overflow-x-auto">
  <table className="table border">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Spot Name</th>
        <th>Cost</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>



    <tbody>
      {
        mySpot.map((spot, index) => <tr key={spot._id}>
          <th>{index + 1}</th>
          <td>{spot.name}</td>
          <td>{spot.spotName}</td>
          <td>{spot.cost}</td>
          <td className="text-xl">
            <Link>
            <FaEdit></FaEdit>
            </Link>
          </td>
          <td className="text-xl">
            <Link>
            <MdDeleteSweep className="text-red-500"></MdDeleteSweep>
            </Link>
          
          </td>
          
        </tr>)
      }
    
      
     
      
    </tbody>
  </table>
</div>





     
    </div>
  );
};

export default MyList;
