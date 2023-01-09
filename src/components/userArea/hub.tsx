import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import ContactList from "./contactList";
import authService from "../../services/authService";
import addressBookService from "../../services/addressBookService";

const Hub = () => {
  const [username, setUsername] = React.useState(authService.getUsername());

  const [resultstring, setResult] = React.useState("");

  useEffect(() => {
    const getUserId = async () => {
      addressBookService
        .SearchUser(username)
        .then((response) => setResult(response.data.userId));
    };
    getUserId();
  }, []);

  return (
    <div>
      <h1>This is the member area</h1>
      <ContactList userID={resultstring} />
    </div>
  );
};

export default Hub;
