import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {MessageType} from "@/features/usersMessager/model/UserMessagesProvider.tsx";

export type UserHubContextType = {
  users: UsersType[],
  profile: UsersType,
  setUsers: Dispatch<SetStateAction<UsersType[]>>,
  setProfile: Dispatch<SetStateAction<UsersType>>,
}
type UsersType = MessageType;
export const UserHubContext = createContext<UserHubContextType | null>(null);

type Props = {
  children: ReactNode
}
export const UserHubProvider = ({children}: Props) => {

  const [users, setUsers] = useState<UsersType[]>([]);
  const [profile, setProfile] = useState<UsersType>({} as UsersType);

  return (
    <UserHubContext.Provider value={{users, profile, setUsers, setProfile}}>
      {children}
    </UserHubContext.Provider>
  );
};
