import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/pages/Home";
import Main from "../components/layouts/Main";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import Blogs from "../components/pages/Blogs";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signin",
            element: <SignUp></SignUp>
        },
        {
            path: "blogs",
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

