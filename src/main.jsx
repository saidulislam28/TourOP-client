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
import ViewSpotDetails from "./component/ViewSpotDetails";
import Update from "./component/Update";
import Error from "./component/Error";
import PrivateRoutes from "./routes/PrivateRoutes";


// import Update from "./component/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('https://tour-op-server.vercel.app/spot')
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
        loader: () => fetch('https://tour-op-server.vercel.app/spot')
      },
      {
        path:"/addSpot",
        element:(<PrivateRoutes>
          <Added_Spots></Added_Spots>
        </PrivateRoutes>)
      },
      {
        path:"/mylist",
        element:<MyList></MyList>,
        loader: () => fetch('https://tour-op-server.vercel.app/spot')
      },
      {
        path:"/spot/:id",
        element:(<PrivateRoutes>
          <ViewSpotDetails></ViewSpotDetails>
        </PrivateRoutes>),
        loader: () => fetch('https://tour-op-server.vercel.app/spot')
      },
      {
        path: "/updateSpot/:id",
        element: <Update></Update>
        
      }
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