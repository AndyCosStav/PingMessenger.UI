import configData from "../configs/config.json";
import Axios from "axios";
import axios from "axios";

const API_URL = configData.PingMessengerAPI;

const SearchUser = (username: string) => {
  return axios.post(API_URL + "/searchUser", username).then((response) => {
    console.log(response);
  });
};

const AddToAddressBook = () => {};

const ListContacts = () => {};

const addressBookService = {
  SearchUser,
  AddToAddressBook,
  ListContacts,
};

export default addressBookService;
