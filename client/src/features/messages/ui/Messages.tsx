import s from './Messages.module.scss'
import {useState} from "react";
import {Profile} from "@/features/messages/ui/profile/Profile.tsx";
import {Screen} from "@/features/messages/ui/screen/Screen.tsx";
import {MessageType, Websocket} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";


export const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen  messages={messages}/>
      <Websocket  messages={messages} setMessages={setMessages}/>
      {/*<EventSourcing messages={messages} setMessages={setMessages}/>*/}
    </section>
  );
};
