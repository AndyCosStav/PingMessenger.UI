import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStatus } from "../components/context/context";

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const { userStatus, setUserStatus } = useUserStatus();
  return userStatus == 1 ? children : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
