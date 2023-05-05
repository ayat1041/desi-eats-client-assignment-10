import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../../providers/AuthProviders";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Tooltip as ReactTooltip } from "react-tooltip";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
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
          {user ? (
            <div className="flex">
              <button
                onClick={handleLogOut}
                className="btn bg-orange-400 border-0 p-2 mr-2"
              >
                Logout
              </button>
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="rounded-full w-12 h-12 border-2 border-yellow-200"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
          <Tooltip id="my-tooltip" className="z-50"/>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
