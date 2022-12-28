import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useUserStatus } from "../context/context";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>!Ping!</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer
            to="/login"
            style={{ display: "block" }}
            className="LoginEl"
          >
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer
            to="/register"
            style={{ display: "block" }}
            className="LoginEl"
          >
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
