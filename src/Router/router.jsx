import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../LayOut/Home/Home";
import Manu from "../Pages/Manu/Manu";
import Order from "../Order/Order";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/manu',
          element:<Manu></Manu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Signup></Signup>
        }
      ]
    },
  ]);
  

