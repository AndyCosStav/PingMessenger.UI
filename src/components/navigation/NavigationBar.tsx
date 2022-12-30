import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import authService from "../../services/authService";
const NavigationBar = () => {
  const hideNavItemsIfLoggedIn = (isLoggedIn: boolean) => {
    let elms = document.getElementsByClassName(
      "LoginEl"
    ) as HTMLCollectionOf<HTMLElement>;
    let logoutElms = document.getElementsByClassName(
      "LogoutEl"
    ) as HTMLCollectionOf<HTMLElement>;
    if (isLoggedIn) {
      console.log(logoutElms);
      for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = "none";
      }
      logoutElms[0].style.display = "block";
    } else {
      for (var i = 0; i < elms.length; i++) {
        elms[i].style.display = "block";
      }
      logoutElms[0].style.display = "none";
    }
  };

  const logout = () => {
    authService.logOut();
  };

  const [currentUserStatus, setCurrentUserStatus] = React.useState(
    authService.getCurrentUser()
  );

  useEffect(() => {
    if (currentUserStatus) {
      hideNavItemsIfLoggedIn(true);
    } else {
      hideNavItemsIfLoggedIn(false);
    }
  });

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
          <LinkContainer
            onClick={logout}
            to="/login"
            style={{ display: "block" }}
            className="LogoutEl"
          >
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
