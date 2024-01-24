import React from "react";
import {PrivateRouteCheck,PublicRouteCheck} from "./privateRouteCheck"
import ErrorPage from "../pages/err";
import Root from "../pages/root";
import Login from "../pages/loign";
import Dashboard from '../pages/dashboard'
import Users from '../pages/Users'
import AddUser from '../pages/Adduser'
import EditUser from "../pages/Edituser"

const routes = [
  {
    element: <PrivateRouteCheck><Root /></PrivateRouteCheck>,
    children: [
      {
        path: "/users",
        element: <PrivateRouteCheck><Users /></PrivateRouteCheck>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/add-user",
        element: <PrivateRouteCheck><AddUser /></PrivateRouteCheck>,
        errorElement: <ErrorPage />,
      },
      {
        exact:true,
        path: "/",
        element: <PrivateRouteCheck><Dashboard /></PrivateRouteCheck>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard",
        element: <PrivateRouteCheck><Dashboard /></PrivateRouteCheck>,
        errorElement: <ErrorPage />,
      },
      {
        path: "edit-user/:userId",
        element: <PrivateRouteCheck><EditUser /></PrivateRouteCheck>,
      }
    ]
  },
  {
    path: "/login",
    element: <PublicRouteCheck><Login /></PublicRouteCheck>
  },
  {
    path: "/",
    element: <PublicRouteCheck><Login /></PublicRouteCheck>,
    errorElement: <ErrorPage />,
  },
];

export {routes}