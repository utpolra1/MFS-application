import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [pin, setPin] = useState('');
  const [credential, setCredential] = useState(''); // This will handle either email or phone
  const location=useLocation();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', { credential, pin });
      alert('Login successful');
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <form className="flex flex-col gap-4 p-10" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Or Phone</span>
              </label>
              <input
                type="text"
                placeholder="email or phone"
                className="input input-bordered"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pin Code</span>
              </label>
              <input
                type="password"
                placeholder="pin"
                className="input input-bordered"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gray-900 text-white">Login</button>
            </div>
            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Don't have an account?{" "}
              <NavLink className='font-bold text-blue-500' to="/register">Register</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
