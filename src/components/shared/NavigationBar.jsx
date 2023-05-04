import React from "react";
import ActiveLink from "./ActiveLink";

const NavigationBar = () => {
  return (
    <nav>
      {/* <ActiveLink className='text-4xl' to="/">Home</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/signin">Sign up</ActiveLink>
            <ActiveLink to="/blogs">Blogs</ActiveLink> */}
      <div className="bg-orange-600 navbar shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/" title="Home"></ActiveLink>
              </li>
              <li>
                <ActiveLink to="/login" title="Login">
                  Login
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/signin" title="sign up">
                  Sign up
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blogs" title="blogs">
                  Blogs
                </ActiveLink>
              </li>
            </ul>
          </div>
          <p>
            <span className="flex flex-col lg:flex-row ms-2 text-base lg:text-lg items-center font-medium lg:font-extrabold drop-shadow-lg">
              <span className="text-yellow-400 font-bold">Desi</span>
              <span>_eats.</span>
            </span>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/" title="Home"></ActiveLink>
            </li>
            <li>
              <ActiveLink to="/login" title="Login">
                Login
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/signin" title="sign up">
                Sign up
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs" title="blogs">
                Blogs
              </ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img
            className="rounded-full w-10 border-2 border-yellow-200"
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
