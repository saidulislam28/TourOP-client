import { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";

const Update = () => {

const {id} = useParams();
console.log(id);

const [spot, setSpot] = useState({});

useEffect(()=>{
  fetch(`http://localhost:5000/spot/${id}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setSpot(data)
  })
}, [id])


const handleUpdate = (e) =>{
e.preventDefault();

const  form = e.target;
const spotName = form.spotName.value;
const countryName = form.countryName.value;
const info  = {spotName, countryName}
fetch(`http://localhost:5173/updateSpot/${id}`,{
  method:"PUT",
  headers:{
    "content-type": "application/json"
  },
  body: JSON.stringify(info)
})

}

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-6xl">this is update {id} </h1> */}

      <form onSubmit={handleUpdate}>
        <div className=" lg:grid grid-cols-2 gap-5   space-y-5 lg:space-y-0">
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Tourists Spot Name
            </label>

            <input
              name="spotName"
              defaultValue={spot.spotName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Country Name
            </label>

            <input
              

              name="countryName"
              defaultValue={spot.countryName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">location</label>

            <input
              name="location"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              

            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">seasonality</label>

            <input
             
              name="seasonality"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Average Cost
            </label>

            <input
              name="cost"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Travel Time</label>

            <input
              name="travelTime"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Visitors Per Year
            </label>

            <input
              name="visitors"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Image</label>

            <input
              name="image"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Name</label>

            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Your Email</label>

            <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full col-span-2">
            <label className="label-text mb-2 font-semibold">Description</label>

            <input
              name="description"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
        </div>

        <div className="form-control w-full">
          <input
            type="submit"
            placeholder=""
            value="Add"
            className="input input-bordered w-full max-w-xl mx-auto btn btn-warning mt-8"
          />
        </div>
      </form>


    </div>
  );
};

export default Update;