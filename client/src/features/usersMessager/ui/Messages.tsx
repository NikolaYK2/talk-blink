import s from './Messages.module.scss'
import {Profile} from "@/common/components/profile/ui/Profile.tsx";
import {Screen} from "@/features/usersMessager/ui/screen/Screen.tsx";
import {Websocket} from "@/features/usersMessager/ui/websocket/ui/Websocket.tsx";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";


export const Messages = () => {

  const {style} = useUsersMessages();

  return (
    <section className={`${s.containerMessages} ${style}`}>
      <Profile btnBack/>
      <Screen/>
      <Websocket/>
    </section>
  );
};
