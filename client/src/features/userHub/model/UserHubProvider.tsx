import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {MessageType} from "@/features/usersMessager/model/UserMessagesProvider.tsx";

export type PostContextType = {
  profile: ProfileType[],
  setProfile: Dispatch<SetStateAction<ProfileType[]>>,
}
type ProfileType = MessageType;
export const UserHubContext = createContext<PostContextType | null>(null);

type Props = {
  children: ReactNode
}
export const UserHubProvider = ({children}: Props) => {

  const [profile, setProfile] = useState<ProfileType[]>([]);

  return (
    <UserHubContext.Provider value={{profile, setProfile}}>
      {children}
    </UserHubContext.Provider>
  );
};
