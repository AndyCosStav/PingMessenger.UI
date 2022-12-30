import axios from "axios";
import configData from "../configs/config.json";
import Cookies from "universal-cookie";

const API_URL = configData.PingMessengerAPI;

interface ILoginCredentials {
  Username: string;
  Password: string;
}

interface IRegisterCredentials {
  Username: string;
  Email: string;
  Password: string;
}
const cookies = new Cookies();

const login = async (credentials: ILoginCredentials) => {
  return axios
    .post(API_URL + "/login", credentials)
    .then((response) => {
      cookies.set("access-token", response.data.token, {
        path: "/",
        expires: new Date(response.data.expiration),
      });
      console.log(cookies);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

const register = (credentials: IRegisterCredentials) => {
  return (
    axios
      .post(API_URL + "/register", credentials)
      //if response is ok then proceed
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

const logOut = () => {
  cookies.remove("access-token", { path: "/" });
  window.location.reload();
};

const getCurrentUser = () => {
  const userStr = cookies.get("access-token");
  console.log(userStr);
  return userStr;
};

const authService = {
  login,
  register,
  logOut,
  getCurrentUser,
};

export default authService;
