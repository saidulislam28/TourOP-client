
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Added_Spots = () => {

const handleAddPlaces = event =>{
  event.preventDefault();
  
const  form = event.target;
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

const newSpot = {name, spotName, countryName,location,season, cost , travelTime, visitors, image, email, description}

console.log(name, spotName, countryName,location,season, cost , travelTime, visitors, image, email, description);

fetch('https://tour-op-server.vercel.app/spot',{
  method: 'POST',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(newSpot)
})
.then(res=> res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
    toast('Data sent successfully')
    form.reset();

  }
})
.catch(error =>{
  console.log(error);
})




}




  return (
    <div className="container mx-auto border p-4">
      <h1 className=" text-xl lg:text-5xl text-center mb-10 font-serif font-semibold lg:font-bold">
       Add your places from here
      </h1>

      <div className="divider"></div>
      <form onSubmit={handleAddPlaces}>
        <div className=" lg:grid grid-cols-2 gap-5   space-y-5 lg:space-y-0">
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Tourists Spot Name
            </label>

            <input
              name="spotName"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">
              Country Name
            </label>

            <input
              required

              name="countryName"
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
              required

            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">seasonality</label>

            <input
             required
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
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Travel Time</label>

            <input
              name="travelTime"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
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
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Image</label>

            <input
              name="image"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Name</label>

            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label-text mb-2 font-semibold">Your Email</label>

            <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-full col-span-2">
            <label className="label-text mb-2 font-semibold">Description</label>

            <input
              name="description"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
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

export default Added_Spots;
