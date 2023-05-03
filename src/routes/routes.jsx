import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../components/pages/Home";
import Main from "../components/layouts/Main";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import Blogs from "../components/pages/Blogs";
import Chef from "../components/pages/Chef";
  
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
        },
        {
          path: "chef/:id",
          element: <Chef></Chef>,
          loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
        }
      ]
    },
  ]);

