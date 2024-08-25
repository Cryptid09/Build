
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';  // Import the router for redirection

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();  // Initialize Next.js router

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5009/auth/current-user', { withCredentials: true });
        if (response.data) {
          setUser(response.data);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    fetchUser();
  }, []);

  const login = () => {
    window.location.href = 'http://localhost:5009/auth/google';
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:5009/auth/logout', {}, { withCredentials: true });
      setIsLoggedIn(false);  // Set logged in state to false after logout
      setUser(null);  // Clear user data
      router.push('/');  // Redirect to the home page after logout
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};