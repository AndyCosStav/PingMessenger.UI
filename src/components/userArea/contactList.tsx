import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import addressBookService from "../../services/addressBookService";

const ContactList = () => {
  //test value be sure to change
  var userId = "C46343DC-4585-4E66-9C1F-496A0430354A";

  const [contactList, setContactList] = React.useState([
    addressBookService.ListContacts(userId),
  ]);

  const GetListOfContacts = async () => {
    await addressBookService
      .ListContacts(userId)
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    GetListOfContacts();
  });

  return (
    <div>
      <h5>Contact List</h5>
    </div>
  );
};

export default ContactList;
