import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Tourist_Spots from "./routes/Tourist_Spots";
import Added_Spots from "./routes/Added_Spots";
import MyList from "./routes/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/tourSpot",
        element:<Tourist_Spots></Tourist_Spots>
      },
      {
        path:"/addSpot",
        element:<Added_Spots></Added_Spots>
      },
      {
        path:"/mylist",
        element:<MyList></MyList>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);