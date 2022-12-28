import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "./App.css";
import { UserStatus, UserStatusContext } from "./components/context/context";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/login/RegisterPage";
import NavMenu from "./components/navbar/NavMenu";
import Hub from "./components/userArea/hub";
import LoggedInWrapper from "./privateRoutes/LoggedInWrapper";
import PrivateWrapper from "./privateRoutes/PrivateWrapper";

function App() {
  const [userStatus, setUserStatus] = React.useState(
    // initial value from localStorage or default value
    JSON.parse(localStorage.getItem("userStatus") || "{}") ??
      UserStatus.LoggedOff
  );

  useEffect(() => {
    console.log("userStatus is " + userStatus);
    // persist userStatus state changes to localStorage
    localStorage.setItem("userStatus", JSON.stringify(userStatus));
  }, [userStatus]);
  return (
    <div>
      <h1>testing</h1>
      <Hub />
    </div>
  );
}

export default App;
