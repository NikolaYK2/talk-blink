import {useContext} from "react";
import {UserHubContext} from "@/features/userHub/model/UserHubProvider.tsx";

export const useUserHub = () => {
  const context = useContext(UserHubContext);
  if (!context) {
    throw new Error('useProfile must be defined');
  }
  return context
}
