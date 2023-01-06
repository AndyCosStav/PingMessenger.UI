import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import ContactList from "./contactList";
import authService from "../../services/authService";
import addressBookService from "../../services/addressBookService";

const Hub = () => {
  const [username, setUsername] = React.useState(authService.getUsername());
  return (
    <div>
      <h1>This is the member area</h1>
      <ContactList />
    </div>
  );
};

export default Hub;
