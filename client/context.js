import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [Login, setLogin] = useState(true);

  return (
    <LoginContext.Provider value={{ Login, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
