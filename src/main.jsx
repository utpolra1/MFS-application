import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Component/Route/Route.jsx";
import Login from "./Component/UserAuthtication/Login.jsx";
import Register from "./Component/UserAuthtication/Register.jsx";
import AuthProvider from "./Component/AuthProvider/AuthProvider.jsx";
import Dashboard from "./Component/Dashboard/Dashboard.jsx";
import CashOut from "./Component/Dashboard/CashOut.jsx";
import Cashin from "./Component/Dashboard/Cashin.jsx";
import TransactionsHistory from "./Component/Dashboard/TransactionsHistory.jsx";
import SendMoney from "./Component/Dashboard/SendMoney.jsx";
import Balance from "./Component/Dashboard/Balance.jsx";
import PrivetRoute from "./Component/PrivateRoute/PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,  // This should render children using <Outlet />
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <PrivetRoute>
          <Dashboard></Dashboard>
        </PrivetRoute>,  // Home component should be the default dashboard route
        children: [
          {
            path:"blance",
            element:<Balance></Balance>

          },
          {
            path: "cashOut",
            element: <CashOut></CashOut>,
          },
          {
            path: "cashin",
            element: <Cashin />,
          },
          {
            path: "transactionhistory",
            element: <TransactionsHistory />,
          },
          {
            path:'sentmoney',
            element:<SendMoney></SendMoney>
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
