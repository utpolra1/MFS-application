import React from 'react';

const Cashin = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Cash In</h2>
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
          <label className="block text-gray-700">Payment Method</label>
          <select
            // value={paymentMethod}
            // onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="">Select payment method</option>
            <option value="bank">Bank Transfer</option>
            <option value="creditCard">Credit Card</option>
            <option value="mobileWallet">Mobile Wallet</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Cash In
        </button>
      </form>
    </div>
    );
};

export default Cashin;