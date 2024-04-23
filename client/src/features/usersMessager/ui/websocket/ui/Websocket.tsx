import {useInput} from "@/common/hooks/useInput.ts";
import {useRef, useState} from "react";
import {v1} from "uuid";
import {BASE_URL} from "@/common/instance/instance.ts";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";
import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";
import {Auth} from "@/features/usersMessager/ui/websocket/ui/auth/Auth.tsx";
import {MessageType} from "@/features/usersMessager/model/UserMessagesProvider.tsx";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";

const data = new Date();
const time = data.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

export const Websocket = () => {
  const [connected, setConnected] = useState(false);

  const {setValue, value, onChange} = useInput('');

  const {value: user, onChange: onChangeUser} = useInput('');

  const {setUsers, setProfile, profile} = useUserHub();

  const {setUsersMessages} = useUsersMessages();

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
      if (Array.isArray(message)) {
        setUsers(message);
      } else {
        setUsersMessages((prevMessages: MessageType[]) => [...prevMessages, {
          ...message,
          isUser: message.username === user
        },]);
        setProfile({...profile, username: user, data: time});
      }
    }
    socket.current.onclose = () => {
      console.log('close');
      const disconnectMessage: MessageType = {
        event: 'disconnect',
        username: user,
        id: v1(),
        data: time,
        message: '',
        isUser: false
      }
      socket.current?.send(JSON.stringify(disconnectMessage));
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

