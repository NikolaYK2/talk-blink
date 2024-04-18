import s from './Messages.module.scss'
import {useState} from "react";
import {Profile} from "@/features/messages/ui/profile/Profile.tsx";
import {LongPuling} from './longPuling/LongPuling';
import {Screen} from "@/features/messages/ui/screen/Screen.tsx";

export type Message = {
  id: number,
  data: Date,
  message: string,
  isUser:boolean,
}
export const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen messages={messages}/>
      <LongPuling messages={messages} setMessages={setMessages}/>
    </section>
  );
};
