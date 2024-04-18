import s from './Screen.module.scss'
import {MessageType} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";

type Props = {
  messages: MessageType[]
}
export const Screen = ({messages}: Props) => {

  return (
    <div className={s.containerScreen}>
      {messages.map((message) => <div key={message.id} className={`${s.message} ${!message.isUser && s.userMessage} `}>
        <div className={`${s.item}`}>
          {message.message}
        </div>
        <div className={s.data}>
          {message.data}
        </div>
        <div>
          {message.event === 'connection'
            ? <div>user {message.username} connected</div>
            : <div>{message.username}</div>
          }
        </div>
      </div>)}
    </div>
  );
};
