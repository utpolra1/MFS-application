import React, { useContext } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineCash } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { GiNachos } from "react-icons/gi";
import { TbCoinTaka } from "react-icons/tb";

const Dashboard = () => {
  const { user, isLoggedIn, logout } = useContext(authContext);
  console.log(user);
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-slate-300">
        <ul className="menu pb-4 ">
          <div>
            <div>
              <p>Welcome, {user?.name}</p>
              <p>Blance: {user?.balance}</p>
            </div>
          </div>
          <li>
            <NavLink className="flex items-center gap-2 text-center"
              to="/blance"><TbCoinTaka/> Balance</NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-center"
              to="/sentmoney"
            >
              <FaMoneyBillTransfer />
              Send Money
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-center"
              to="/cashOut"
            >
              <HiOutlineCash />
              Cash-Out
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-center"
              to="/cashin"
            >
              <BsCashCoin />
              Cash-in
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-2 text-center"
              to="/transactionhistory"
            >
              <FaHistory />
              Transactions History
            </NavLink>
          </li>
          <div className="divider"></div>
          <div>
            {isLoggedIn && user ? (
              <div>
                <p></p>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div>
                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>
              </div>
            )}
          </div>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
