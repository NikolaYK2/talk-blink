import s from './Messages.module.scss'
import {LongPuling} from "@/features/messages/longPuling/LongPuling.tsx";
import {Profile} from "@/features/messages/profile/Profile.tsx";
import {Screen} from "@/features/messages/screen/Screen.tsx";

export const Messages = () => {
  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen/>
      <LongPuling/>
    </section>
  );
};
