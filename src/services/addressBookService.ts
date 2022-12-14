import configData from "../configs/config.json";
import axios from "axios";
import { Guid } from "guid-typescript";
import authService from "./authService";

axios.defaults.headers.common = {
  Authorization: `bearer ${authService.getCurrentUserStatus()}`,
};

interface IListContactRequest {
  userId: Guid;
}

const API_URL = configData.PingMessengerAPI;
//unsupported media type when searching user - need to search user to get user object to pass through to contact list
const SearchUser = async (username: string) => {
  return axios
    .post(API_URL + "/searchUser", username, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    });
};

const AddToAddressBook = () => {};

const ListContacts = (userId: string) => {
  console.log(JSON.stringify(userId));
  return axios
    .post(API_URL + "/listContacts", userId, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      return response;
    });
};

const addressBookService = {
  SearchUser,
  AddToAddressBook,
  ListContacts,
};

export default addressBookService;
