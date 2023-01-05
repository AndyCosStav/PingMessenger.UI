import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const credentials = {
      Email: email,
      Username: username,
      Password: password,
    };
    authService.register(credentials);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="LoginForm">
        <h1 className="Title">Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Plese enter your email </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="email"
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Plese enter your username </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handleUsernameChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlePasswordChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="retypepassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="Confirm password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSave}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
