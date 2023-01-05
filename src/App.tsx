import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import Hub from "./components/userArea/hub";

import authService from "../src/services/authService";
import addressBookService from "./services/addressBookService";
import { Guid } from "guid-typescript";

function App() {
  const [currentUserStatus, setCurrentUserStatus] = React.useState(
    authService.getCurrentUserStatus()
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
      <Hub />
    </div>
  );
}

export default App;
