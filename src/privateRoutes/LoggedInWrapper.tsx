import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStatus } from "../components/context/context";

const LoggedInWrapper = ({ children }: { children: JSX.Element }) => {
  const { userStatus, setUserStatus } = useUserStatus();
  return userStatus == 0 ? children : <Navigate to="/hub" replace />;
};

export default LoggedInWrapper;
