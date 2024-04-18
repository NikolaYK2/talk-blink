import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useRef, useState} from "react";
import {v1} from "uuid";
import s from './Websocket.module.scss'
import {BASE_URL} from "@/common/instance/instance.ts";

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
  const {setValue, value, onChange} = useInput('');
  const {value: user, onChange: onChangeUser} = useInput('');

  const socket = useRef<WebSocket | null>(null);

  const [connected, setConnected] = useState(false);

  const hasValue = value !== '';

  const addMessageHandler = async () => {

    if (hasValue) {
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
  }

  const connectHandler = () => {
    socket.current = new WebSocket(`ws${BASE_URL}`);

    socket.current.onopen = () => {
      setConnected(true);

      const message: MessageType = {
        event: 'connection',
        username: user,
        id: v1(),
        data: time,
        message: 'Welcome to the meeting!',
        isUser: false
      }
      socket.current?.send(JSON.stringify(message))
    }
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages: MessageType[]) => [{...message, isUser: message.username === user}, ...prevMessages,]);
    }
    socket.current.onclose = () => {
      console.log('close')
    }
    socket.current.onerror = () => {
      console.log('error!!!')
    }

  }

  if (!connected) {
    return <div>
      <div>
        <input type="text" value={user} onChange={onChangeUser}/>
        <button onClick={connectHandler}>sign in</button>
      </div>
    </div>
  }
  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange}/>
      <button className={`${s.btn}`} onClick={addMessageHandler}><IconSvg name={"addMessage"}/>
      </button>
    </div>
  );
};

