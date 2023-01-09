import { Guid } from "guid-typescript";
import React, { useEffect, useState } from "react";
import addressBookService from "../../services/addressBookService";

interface IProps {
  userID: string;
}

const ContactList = ({ userID }: IProps) => {
  const [contactList, setContactList] = React.useState([
    addressBookService.ListContacts(userID),
  ]);

  const GetListOfContacts = async () => {
    await addressBookService
      .ListContacts(userID)
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
