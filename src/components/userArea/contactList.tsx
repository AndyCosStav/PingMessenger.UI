import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import addressBookService from "../../services/addressBookService";

const ContactList = () => {
  const user = {
    userId: Guid.parse("24883e12-439d-4e54-aae5-5b1d5140833e"),
  };

  const [contactList, setContactList] = React.useState([
    addressBookService.ListContacts(user),
  ]);

  console.log(contactList);
  return (
    <div>
      <h5>Contact List</h5>
    </div>
  );
};

export default ContactList;
