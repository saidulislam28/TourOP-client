import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";

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
    return (
      <div className="text-center mt-40 flex items-center justify-center ">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const mySpot = allspots.filter((spot) => spot.email === user.email);

  console.log(mySpot);

  const handleDelete = (spot) => {
    const _id = spot._id;
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your added spot has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl my-10 text-center">
        You added {mySpot.length} items in your list{" "}
      </h1>
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
            {mySpot.map((spot, index) => (
              <tr key={spot._id}>
                <th>{index + 1}</th>
                <td>{spot.name}</td>
                <td>{spot.spotName}</td>
                <td>{spot.cost}</td>
                <td className="text-xl">
                  <Link to={`updateSpot/${spot._id}`}>
                    <button className="btn">
                      <FaEdit className="text-xl"></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(spot)} className="btn">
                    <MdDeleteSweep className="text-xl text-red-400"></MdDeleteSweep>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
