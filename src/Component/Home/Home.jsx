import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const { user, isLoggedIn, logout } = useContext(authContext);
  console.log(user);

  return (
    <div>
    </div>
  );
};

export default Home;
