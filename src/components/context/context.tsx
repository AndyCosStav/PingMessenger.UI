import { createContext, useContext } from "react";

export enum UserStatus {
  LoggedOff = 0,
  LoggedIn = 1,
}

export type UserStatusContextType = {
  userStatus: UserStatus;
  setUserStatus: (userStatus: UserStatus) => void;
};

export const UserStatusContext = createContext<UserStatusContextType>({
  userStatus: UserStatus.LoggedOff,
  setUserStatus: (userStatus) => console.warn("log on status unknown"),
});

export const useUserStatus = () => useContext(UserStatusContext);
