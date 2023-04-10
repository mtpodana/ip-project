import React, { useMemo,useState,useEffect,useContext } from "react";
import { Navigate } from "react-router-dom";
import MyContext from "../Context/MyContextProps";

const ProtectedRoute:React.FC<any> = ({  children }) => {
  const { token, setToken } = useContext(MyContext);
  console.log("token from protectted",token)
  
    const user = token;
    if (!user) {
      return <Navigate to="/login" replace />;
    } else if(user == 'token')
    {
      return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;