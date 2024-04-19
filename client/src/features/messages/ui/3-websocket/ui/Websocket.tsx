import {useInput} from "@/common/hooks/useInput.ts";
import {useRef, useState} from "react";
import {v1} from "uuid";
import {BASE_URL} from "@/common/instance/instance.ts";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";
import {Auth} from "@/features/messages/ui/3-websocket/ui/auth/ui/Auth.tsx";

export type MessageType = {
  event: 'message' | 'connection',
  message: string,
  id: string,
  data: string,
  username: string,
  isUser: boolean,
}
const data = new Date();
const time = data.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

type Props = {
  messages: MessageType[],
  setMessages: (messages: any) => void,
}
export const Websocket = ({setMessages}: Props) => {
  const [connected, setConnected] = useState(false);

  const {setValue, value, onChange} = useInput('');
  const {value: user, onChange: onChangeUser} = useInput('');

  const socket = useRef<WebSocket | null>(null);


  const addMessageHandler = async () => {

      const message: MessageType = {
        username: user,
        message: value,
        id: v1(),
        event: 'message',
        data: time,
        isUser: false
      }
      socket.current?.send(JSON.stringify(message));
      setValue('')

  }

  const connectHandler = () => {
    socket.current = new WebSocket(`ws://${BASE_URL}`);

    socket.current.onopen = () => {
      setConnected(true);

      const message: MessageType = {
        event: 'connection',
        username: user,
        id: v1(),
        data: time,
        message: '',
        isUser: false
      }
      socket.current?.send(JSON.stringify(message))
    }
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages: MessageType[]) => [...prevMessages, {...message, isUser: message.username === user},]);
    }
    socket.current.onclose = () => {
      console.log('close')
    }
    socket.current.onerror = () => {
      console.log('error!!!')
    }

  }

  if (!connected) return <Auth user={user} onChange={onChangeUser} onCLick={connectHandler}/>

  return (
    <ChatInput value={value} onChange={onChange} callback={addMessageHandler}/>
  );
};

