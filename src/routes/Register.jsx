import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash,FaEye } from 'react-icons/fa';
import { AuthContext } from "../provider/AuthProvider";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

const Register = () => {

  const [showPassword, setShowPassword] =useState(false);

 const {registerUser,updateProfileInfo} = useContext(AuthContext)




  const handleRegister = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');


    if(password.length <6){
      return toast.error('Password must be at least 6 characters long.')
     ;
  
    }

    
    if(!uppercaseRegex.test(password)){
      return toast.error('Password must contain at least one uppercase letter.')
      
    }
    if(!lowercaseRegex.test(password)){
      return toast.error('Password must contain at least one lowercase letter.')
     
    }

    console.log(name , email, password, photo);


    registerUser(email,password)
    .then(result =>{
      toast.success("Successfully Registered")
      console.log(result.user);
      updateProfileInfo(name, photo)
      .then()
      .catch(error =>{
        console.log(error);
      })
    })
    .catch(error => {
    
      console.log(error);
    })
    e.target.reset();




  }






  return (
    <form
    data-aos-duration="2000"
          data-aos="slide-up"


     onSubmit={handleRegister}
      className=" md:w-3/4 lg:w-1/2 border rounded-2xl p-4 mx-auto my-10"
    >
       
      <p className="text-3xl text-center mb-4 font-bold text-primary underline">
        Please Register
      </p>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          name="photo"
          placeholder="Photo url"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      
      
      
      
      <div className="">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
       <div className="form-control relative">
       <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        /> <span className="absolute top-4 right-2 text-xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>  {
          showPassword ? <FaEyeSlash /> : <FaEye />
        }</span>
       </div>


        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
      <p>
        Do not have an account ? please 
        <Link className="text-primary underline text-center font-semibold" to="/login">  Login
        </Link>
      </p>
    </form>
  );
};

export default Register;