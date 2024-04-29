import { Link, NavLink, Navigate } from "react-router-dom";
import './navbar/navbar.css'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {


const {user, logOut} = useContext(AuthContext)



  const navLinks = (
    <>
      <li className="mr-2 font-bold">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? " #a881af" : "",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2 font-bold">
        <NavLink
          to="/tourSpot"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#a881af" : "",
          })}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li className="mr-2 font-bold">
        <NavLink
          to="/addSpot"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#a881af" : "",
          
          })}
        >
          Add Tourists Spot
        </NavLink>
      </li>
      { user ?  <li className="font-bold">
        <NavLink
          to="/mylist"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#a881af" : "",
          })}
        >
         My List
        </NavLink>
      </li> : Navigate('/')



      }
      
     
   
       {/* <li className="font-bold">
        <NavLink
          to="/userprofile"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
         Profile
        </NavLink>
      </li>  */}
     
    </>
  );
  const handleLogOut = () => {
    logOut().then().catch();
  };



  return (
    <div className="navbar bg-base-100  container mx-auto">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navLinks}
        </ul>
      </div>
      <a className="animate__animated  animate__headShake">
       
        <span className="text-lg md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-slate-700 via-blue-slate to-slate-200 text-transparent bg-clip-text animate-gradient bg-300%">
         TourOp
        </span>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{navLinks}</ul>
    </div>
    <div className="navbar-end">
      {
        user ?  <div className="flex items-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar mr-4 tooltip tooltip-bottom"
          data-tip={user.displayName}
        >
          <div className="rounded-full">
            <img alt={user.displayName} src={user.photoURL} />
          </div>
        </div>
        <div className="relative overflow-hidden  rounded-xl">
              <button onClick={handleLogOut} className="btn overflow-hidden relative  bg-[#98daf0] text-black rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-[#f3b200] before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-black hover:before:animate-ping transition-all duration-300">
                <span className="relative">Log Out</span>
              </button>
            </div>
      </div> : <div className="flex items-center gap-2">
          <Link to="/register">
            <p className="btn bg-[#80669d] text-white">Register</p>
          </Link>

         <Link to="/login">
            <p className="btn text-white  bg-[#dd7973]">Login</p>
           </Link>
         </div>
      }
      
       
     
        
     
    </div>
  </div>
  );
};

export default Navbar;