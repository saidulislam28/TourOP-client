import { useLoaderData } from "react-router-dom";

const Update = () => {

const spots = useLoaderData();


  return (
    <div>
      <h1 className="text-6xl">this is update </h1>
    </div>
  );
};

export default Update;