import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export type MessageType = {
  event: 'message' | 'connection' | 'disconnect',
  message: string,
  id: string,
  data: string,
  username: string,
  isUser: boolean,
}
type UserMessagesContext = {
  usersMessages: MessageType[];
  setUsersMessages: Dispatch<SetStateAction<MessageType[]>>;
}

export const UsersMessagesContext = createContext<UserMessagesContext | null>(null);

type Props = {
  children: ReactNode;
}
export const UserMessagesProvider = ({children}: Props) => {
  const [usersMessages, setUsersMessages] = useState<MessageType[]>([]);

  return (
    <UsersMessagesContext.Provider value={{usersMessages, setUsersMessages}}>
      {children}
    </UsersMessagesContext.Provider>
  );
};
