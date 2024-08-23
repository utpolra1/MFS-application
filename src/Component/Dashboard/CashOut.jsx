import React from 'react';

const CashOut = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Cash Out</h2>
      <form className="mt-6">
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Select Account</label>
          <select
            // value={account}
            // onChange={(e) => setAccount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="">Select account</option>
            <option value="bank">Bank Account</option>
            <option value="mobileWallet">Mobile Wallet</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Cash Out
        </button>
      </form>
    </div>
    );
};

export default CashOut;