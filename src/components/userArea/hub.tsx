import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { UserStatus, useUserStatus } from "../context/context";
import { useNavigate } from "react-router-dom";

const Hub = () => {
  const { userStatus, setUserStatus } = useUserStatus();

  const navigate = useNavigate();

  const logOut = () => {
    setUserStatus(UserStatus.LoggedOff);
    navigate("/login");
  };

  return (
    <div>
      <h1>This is the member area</h1>
      <Button variant="primary" type="submit" onClick={logOut}>
        Logout
      </Button>
    </div>
  );
};

export default Hub;
