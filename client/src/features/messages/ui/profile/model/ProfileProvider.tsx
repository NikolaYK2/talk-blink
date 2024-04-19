import {createContext, ReactNode, useState} from "react";
import {MessageType} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";

export type PostContext = {
  profile: ProfileType,
  setProfile: (profile: ProfileType) => void,
}
type ProfileType = Pick<MessageType, 'data' | 'username'>;
export const ProfileContext = createContext<PostContext | null>(null);

type Props = {
  children: ReactNode
}
export const ProfileProvider = ({children}: Props) => {

  const [profile, setProfile] = useState<ProfileType>({} as ProfileType);

  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      {children}
    </ProfileContext.Provider>
  );
};
