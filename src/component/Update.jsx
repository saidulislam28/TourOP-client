import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {

const {id} = useParams();
console.log(id);

const [spot, setSpot] = useState({});

useEffect(()=>{
  fetch(`https://tour-op-server.vercel.app/spot/${id}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setSpot(data)
  })
}, [id])


const handleUpdate = (e) =>{
e.preventDefault();

const  form = e.target;
const name = form.name.value;
const spotName = form.spotName.value;
const countryName = form.countryName.value;
const location = form.location.value;
const season = form.seasonality.value;
const cost = form.cost.value;
const travelTime = form.travelTime.value;
const visitors = form.visitors.value;
const image = form.image.value;
const email = form.email.value;
const description = form.description.value;
const info  = {name, spotName, countryName,location,season, cost , travelTime, visitors, image, email, description}
console.log(info);
fetch(`https://tour-op-server.vercel.app/updateSpot/${id}`,{
  method:"PUT",
  headers:{
    "content-type": "application/json"
  },
  body: JSON.stringify(info)
})
.then(res=> res.json())
.then(data =>{
  if(data.modifiedCount > 0){
    toast.success("update successful")
  }
})


}

  return (
    <div className="container mx-auto border rounded-xl p-4">
      <h1 className="text-3xl text-center my-5 underline">You can update your information</h1>

      <div className="divider"></div>

      <form onSubmit={handleUpdate}>
        <div className=" lg:grid grid-cols-2 gap-5   space-y-5 lg:space-y-0 mt-10">
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
              defaultValue={spot.location}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              

            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">seasonality</label>

            <input
             
              name="seasonality"
              defaultValue={spot.season}
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
              defaultValue={spot.cost}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Travel Time</label>

            <input
              name="travelTime"
              defaultValue={spot.travelTime}
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
              defaultValue={spot.visitors}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Image</label>

            <input
              name="image"
              defaultValue={spot.image}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Name</label>

            <input
              name="name"
              defaultValue={spot.name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Your Email</label>

            <input
              name="email"
              defaultValue={spot.email}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              
            />
          </div>
          <div className="form-control w-full col-span-2">
            <label className="label-text mb-2 font-semibold">Description</label>

            <input
              name="description"
              defaultValue={spot.description}
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
            value="Update"
            className="input input-bordered w-full max-w-xl mx-auto btn btn-warning mt-8"
          />
        </div>
      </form>


    </div>
  );
};

export default Update;