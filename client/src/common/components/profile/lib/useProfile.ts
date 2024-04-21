import {useContext} from "react";
import {ProfileContext} from "@/common/components/profile/model/ProfileProvider.tsx";

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be defined');
  }
  return context
}
