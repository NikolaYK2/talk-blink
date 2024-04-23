import s from './Messages.module.scss'
import {useState} from "react";
import {Profile} from "@/common/components/profile/ui/Profile.tsx";
import {MessageType, Websocket} from "@/features/usersMessager/ui/websocket/ui/Websocket.tsx";
import {Screen} from "@/features/usersMessager/ui/screen/Screen.tsx";


export const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  console.log(messages)
  return (
    <section className={s.containerMessages}>
      <Profile/>
      <Screen  messages={messages}/>
      <Websocket  messages={messages} setMessages={setMessages}/>
    </section>
  );
};
