import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import authService from "../../services/authService";
import { Navigate, useNavigate } from "react-router-dom";
import { UserStatus, useUserStatus } from "../context/context";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sucess, setSuccess] = useState("");

  const { userStatus, setUserStatus } = useUserStatus();

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const credentials = {
      Username: username,
      Password: password,
    };

    var completed = await completeLoginAction(credentials);

    if (completed) {
      navigate("/hub");
    } else {
      showErrorMessage();
    }
  };

  const completeLoginAction = async (credentials: any) => {
    var loginSuccess = await authService.login(credentials);
    if (loginSuccess) {
      setUserStatus(UserStatus.LoggedIn);
      localStorage.setItem("userStatus", JSON.stringify(userStatus));
      return true;
    } else {
      return false;
    }
  };

  const showErrorMessage = () => {
    let elms = document.getElementsByClassName(
      "loginfailmessage"
    ) as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < elms.length; i++) {
      elms[i].style.display = "block";
    }
  };

  return (
    <div className="container">
      <div className="LoginForm">
        <h1 className="Title">Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleUsernameChange}
              name="username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              name="password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSave}>
            Submit
          </Button>
        </Form>
        <h4 className="loginfailmessage" style={{ display: "none" }}>
          Failed to login
        </h4>
      </div>
    </div>
  );
};

export default LoginPage;
