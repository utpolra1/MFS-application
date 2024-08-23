import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { TbCoinTaka } from "react-icons/tb";

const SendMoney = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <h1>Sent Money</h1>
      <h className="flex justify-center items-center gap-1">
        <TbCoinTaka />
        Balance: {user.balance}
      </h>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Send Money
        </h2>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Recipient</label>
            <input
              type="text"
            //   onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter recipient's phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
            //   onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message (Optional)</label>
            <textarea
            //   onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Add a note"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
