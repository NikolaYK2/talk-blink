import s from './Messages.module.scss'
import {Profile} from "@/common/components/profile/ui/Profile.tsx";
import {Screen} from "@/features/usersMessager/ui/screen/Screen.tsx";
import {Websocket} from "@/features/usersMessager/ui/websocket/ui/Websocket.tsx";


export const Messages = () => {

  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen/>
      <Websocket/>
    </section>
  );
};
