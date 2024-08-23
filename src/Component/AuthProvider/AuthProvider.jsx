import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const authContext = createContext("");

const AuthProvider = ({ children }) => {
  const [credential, setCredential] = useState('');
  const [getuser, setGetuser] = useState([]);
  const [user, setUser] = useState(null); // State to store single user object
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user');
        setGetuser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const storedCredential = localStorage.getItem('credential');
    if (storedCredential) {
      setCredential(storedCredential);
      if (getuser.length > 0) {
        const matchedUser = getuser.find(user => user.email === storedCredential || user.number === storedCredential);
        if (matchedUser) {
          setUser(matchedUser);
          setIsLoggedIn(true);
        }
        setLoading(false); // Ensure loading is set to false after checking users
      }
    } else {
      setLoading(false); // Ensure loading is set to false if no credential found
    }
  }, [getuser]);

  const register = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (credential, pin) => {
    return axios.post('http://localhost:5000/user/login', { credential, pin })
      .then(response => {
        if (response.data) {
          setCredential(credential); // Set credential state
          setUser(response.data); // Set user data from the response
          setIsLoggedIn(true); // Update login status
          localStorage.setItem('credential', credential); // Store credential in localStorage
          return true; // Indicate successful login
        } else {
          throw new Error('Login failed');
        }
      })
      .catch(error => {
        console.error('Login Error:', error); // Log error for debugging
        throw error;
      });
  };

  const logout = () => {
    setCredential('');
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('credential'); // Remove credential from localStorage
    alert('Logout successful'); // Notify user of successful logout
  };

  const AuthInfo = {
    user,
    isLoggedIn,
    register,
    login,
    logout,
  };

  return (
    <authContext.Provider value={AuthInfo}>
      {!loading && children} {/* Render children only when loading is false */}
    </authContext.Provider>
  );
};

export default AuthProvider;
