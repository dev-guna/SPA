import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {routes} from './router/rotes'
import { AuthProvider } from "./context/authContext";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <RouterProvider router={router}  /> 
      </AuthProvider>
);


