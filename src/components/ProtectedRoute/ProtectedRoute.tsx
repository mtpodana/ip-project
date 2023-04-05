import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute:React.FC<any> = ({  children }) => {
    const user = false;
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;