import {useContext} from "react";
import {ProfileContext} from "@/features/messages/ui/profile/model/ProfileProvider.tsx";

export const useProfile = () => useContext(ProfileContext);
