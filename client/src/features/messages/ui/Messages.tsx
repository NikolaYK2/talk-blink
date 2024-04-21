import s from './Messages.module.scss'
import {useState} from "react";
import {Screen} from "@/features/messages/ui/screen/Screen.tsx";
import {MessageType, Websocket} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";
import {Profile} from "@/common/components/profile/ui/Profile.tsx";


export const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen  messages={messages}/>
      <Websocket  messages={messages} setMessages={setMessages}/>
    </section>
  );
};
