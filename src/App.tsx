import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";
import Hub from "./components/userArea/hub";

import authService from "../src/services/authService";

function App() {
  const [currentUserStatus, setCurrentUserStatus] = React.useState(
    authService.getCurrentUser()
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUserStatus == null) {
      navigate("/login");
    }
  });

  if (!currentUserStatus) return <h1>Loading...</h1>;

  return (
    <div>
      {/* <Hub /> */}
      <h1>Testttt</h1>
    </div>
  );
}

export default App;
