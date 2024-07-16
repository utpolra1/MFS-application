import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Component/Route/Route.jsx';
import Login from './Component/UserAuthtication/Login.jsx';
import Register from './Component/UserAuthtication/Register.jsx';
import Home from './Component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login>
        </Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
