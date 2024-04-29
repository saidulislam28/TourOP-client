import { Link } from "react-router-dom";

const AllCountry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1593547440394-72b9cb07b7b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bangladesh</h2>
       
        <p className="font-semibold">Bangladesh, a land of rivers, is famed for its lush greenery, vibrant culture, and historical landmarks like Sundarbans and Cox's Bazar.</p>
        <div className="card-actions justify-end">
        <Link>
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View Details</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllCountry;
