import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { register } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const role = form.role.value;
    const pin = form.pin.value;
    const balance = 0;
    const status ="pandding";
    const formData = { name, pin, number, email, role, balance, status};
    try {
      await register(formData);
      console.log(formData)
      navigate("/");
    } catch (error) {
      alert("Sorry, registration failed");
    }
  };

  return (
    <div className="flex justify-center bg-base-200 min-h-screen">
      <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <form
          className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96 bg-white p-5 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h4 className="text-center block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Register Now
          </h4>
          <div className="flex flex-col gap-6 mb-1">
            <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Name
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Name"
                  className="peer h-full w-full rounded-md border border-black !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>
            <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Phone Number
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="number"
                  required
                  type="number"
                  placeholder="+88"
                  className="peer border-black h-full w-full rounded-md border !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  // value={number}
                  // onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </label>
            <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Email
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="name@mail.com"
                  className="peer h-full w-full rounded-md border border-black !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your PIN
              <div className="relative w-full">
                <input
                  name="pin"
                  type="password"
                  placeholder="PIN"
                  className="peer h-full w-full rounded-md border border-black !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  // value={pin}
                  // onChange={(e) => setPin(e.target.value)}
                  required
                />
              </div>
            </label>
            <label className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Role
              <div className="relative w-full">
                <select
                  name="role"
                  className="peer h-full w-full rounded-md border border-black !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option defaultValue>Your Role</option>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gray-900 text-white py-3 rounded-md transition-all hover:bg-gray-700 focus:outline-none"
          >
            Register
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-500 font-bold">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
