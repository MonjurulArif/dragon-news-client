import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

/*
1. only allow authenticated user to visit the route
2.
3. Redirect user to the route the wanted to go before login

*/

//children is <News/> from Routes.js
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //url location anyone trying to visit before signIn
  const location = useLocation();

  if (loading) {
    return <Spinner animation="border" variant="info" />;
  }

  if (!user) {
    //previous location is set and replace-> for not holding the history that it is going to login page
    // return <Navigate to="/login" ></Navigate>;
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
