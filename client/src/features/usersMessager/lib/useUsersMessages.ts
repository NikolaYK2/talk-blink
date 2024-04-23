import {useContext} from "react";
import {UsersMessagesContext} from "@/features/usersMessager/model/UserMessagesProvider.tsx";

export const useUsersMessages = () => {
  const context = useContext(UsersMessagesContext);
  if (!context) throw new Error('useUsersMessagesHub must be used within the context');
  return context;
}