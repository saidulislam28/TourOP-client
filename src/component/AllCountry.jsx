const AllCountry = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-slate-200 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bangladesh</h2>
          <p className="font-semibold">Bangladesh, a land of rivers, is famed for its lush greenery, vibrant culture, and historical landmarks like Sundarbans and Coxs Bazar.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCountry;
