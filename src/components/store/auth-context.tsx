import React, { useState } from 'react';


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: any) => {},
    logout: () => {},
  });

  export const AuthContextProvider = (props:any) => {
    const initialtoken= localStorage.getItem('name')??'';
    const [token, setToken] = useState(initialtoken);
  
    const userIsLoggedIn = !!token;
  
    const loginHandler = (token: any) => {
      setToken(token);
    };
  
    const logoutHandler = () => {
      setToken('');
    };
  
    const contextValue = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
    };
  
    return (
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;