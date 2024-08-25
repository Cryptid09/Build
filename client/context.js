import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log('BACKEND_URL in context:', BACKEND_URL);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/current-user`, { withCredentials: true });
        if (response.data) {
          setUser(response.data);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoggedIn(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = () => {
    console.log('Login function called. Redirecting to:', `BACKEND_URL`);
    window.location.href = `${BACKEND_URL}/auth/google`;
  };

  const logout = async () => {
    try {
      await axios.post(`${BACKEND_URL}/auth/logout`, {}, { withCredentials: true });
      setIsLoggedIn(false);
      setUser(null);
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, login, logout, isLoading }}>
      {children}
    </LoginContext.Provider>
  );
};