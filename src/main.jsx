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
import AuthProvider from "./provider/AuthProvider";
import { ToastContainer } from 'react-toastify';


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
        element:<Tourist_Spots></Tourist_Spots>,
        loader: () => fetch('http://localhost:5000/spot')
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
    <AuthProvider>

    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);