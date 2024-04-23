import {createContext, ReactNode, useState} from "react";
import {MessageType} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";

export type PostContextType = {
  profile: ProfileType,
  setProfile: (profile: ProfileType) => void,
}
type ProfileType = Pick<MessageType, 'data' | 'username'>;
export const UserHubContext = createContext<PostContextType | null>(null);

type Props = {
  children: ReactNode
}
export const UserHubProvider = ({children}: Props) => {

  const [profile, setProfile] = useState<ProfileType>({} as ProfileType);

  return (
    <UserHubContext.Provider value={{profile, setProfile}}>
      {children}
    </UserHubContext.Provider>
  );
};
