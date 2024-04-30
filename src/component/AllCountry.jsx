import { Link } from "react-router-dom";

const AllCountry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Thailand</h2>
       
        <p className="font-semibold">Thailand, known for its exotic beaches, ancient temples, and bustling markets, offers a blend of rich heritage and modern attractions.</p>
        <div className="card-actions justify-end">
        <Link to="/tourSpot">
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
      {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kb25lc2lhfGVufDB8fDB8fHww"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Indonesia</h2>
       
        <p className="font-semibold">Indonesia, an archipelago of diverse landscapes, boasts stunning natural wonders like Balis beaches, Komodo dragons, and Raja Ampats pristine islands.</p>
        <div className="card-actions justify-end">
        <Link to="/tourSpot">
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
      {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://plus.unsplash.com/premium_photo-1673792464824-176e90045088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Malaysia</h2>
       
        <p className="font-semibold">Malaysia, a melting pot of cultures, presents visitors with vibrant cities like Kuala Lumpur, idyllic islands like Penang, and scenic highlands like Cameron Highlands.</p>
        <div className="card-actions justify-end">
        <Link to="/tourSpot">
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlldG5hbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Vietnam</h2>
       
        <p className="font-semibold">Vietnam, with its breathtaking landscapes, bustling cities, and cultural treasures like Ha Long Bay and Ho Chi Minh City, promises an unforgettable journey.</p>
        <div className="card-actions justify-end">
        <Link>
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1663075039775-c4c05356b8fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Cambodia</h2>
       
        <p className="font-semibold">Cambodia, home to the awe-inspiring Angkor Wat, charming Siem Reap, and picturesque Bokor National Park, is a treasure trove for history and nature enthusiasts.</p>
        <div className="card-actions justify-end">
        <Link to="/tourSpot">
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
    {/* one */}
      <div className="card card-compact max-w-96 bg-slate-100 border shadow-xl">
      <figure>
        <img className="h-60 max-w-96"
          src="https://images.unsplash.com/photo-1593547440394-72b9cb07b7b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bangladesh</h2>
       
        <p className="font-semibold">Bangladesh, a land of rivers, is famed for its lush greenery, vibrant culture, and historical landmarks like Sundarbans and Coxs Bazar.</p>
        <div className="card-actions justify-end">
        <Link to="/tourSpot">
            <div className="relative overflow-hidden  rounded-xl">
              <button className="btn overflow-hidden relative  bg-[#B3C8CF] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#FFEBB2] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">View More</span>
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
