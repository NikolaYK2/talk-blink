import s from './Messages.module.scss'
import {LongPuling} from "@/features/messages/longPuling/LongPuling.tsx";
import {Profile} from "@/features/messages/profile/Profile.tsx";
import {Screen} from "@/features/messages/screen/Screen.tsx";
import {useState} from "react";

export type Message = {
  data: Date,
  message: string,
}
export const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([{data: new Date(), message: 'hi'}]);

  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen messages={messages}/>
      <LongPuling messages={messages} setMessages={setMessages}/>
    </section>
  );
};
