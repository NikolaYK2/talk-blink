import s from './Screen.module.scss'
import {MessageType} from "@/features/usersMessager/ui/websocket/ui/Websocket.tsx";

type Props = {
  messages: MessageType[]
}
export const Screen = ({messages}: Props) => {

  return (
    <div className={s.containerScreen}>
      {messages.map((message) => <div key={message.id} className={`${s.blockItem}`}>

        {message.event === 'connection'

          ? <div className={s.connected}>user <span>{message.username}</span> connected</div>

          : <div className={`${s.blockUser} ${!message.isUser && s.blockMessageUser}`}>

            <div className={`${s.blockMessage}`}>
              <div className={`${s.message}`}>
                {message.message}
              </div>
              <div className={s.data}>
                {message.data}
              </div>
            </div>

            <div className={s.name}>{message.username}</div>
          </div>
        }

      </div>)}
    </div>
  );
};
