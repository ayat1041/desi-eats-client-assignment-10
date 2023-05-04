import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { VscGithub } from 'react-icons/vsc'
const SignUp = () => {
    return (
        <div>
      <div className="relative flex flex-col justify-center my-8">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-orange-600">
            Sign Up
          </h1>
          <form className="space-y-4">
          <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full input input-bordered input-primary border-red-300"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary border-red-300"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo URL"
                className="w-full input input-bordered input-primary border-red-300"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary border-red-300 mb-4"
              />
            </div>
            <span className="block">Already have an account? 
            <Link
              to="/login"
              className="text-gray-600 font-bold ml-2 hover:text-blue-600"
            >
               login here
            </Link>
            </span>
            <div>
              <button className="btn btn-warning w-full m-1">Sign up</button>
            </div>
          </form>
          
          <div>
              <button className="btn bg-sky-100 text-slate-950 border-0 w-full m-1">Login using Google<FcGoogle className="ml-4 text-xl"/></button>
            </div>
            
            <div>
              <button className="btn bg-sky-100 text-slate-950 border-0 w-full m-1">Login using Github<VscGithub className="ml-4 text-xl"/></button>
            </div>
        </div>

      </div>
    </div>
    );
};

export default SignUp;