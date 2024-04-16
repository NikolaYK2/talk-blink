import s from './Screen.module.scss'
import {Message} from "@/features/messages/Messages.tsx";

type Props = {
  messages: Message[]
}
export const Screen = ({messages}: Props) => {

  return (
    <div className={s.containerScreen}>
      {messages.map((message) => <div key={message.id} className={s.message}>
        <div className={s.item}>
          {message.message}
        </div>
        <div className={s.data}>
          {message.data.getDay()}
        </div>
      </div>)}
    </div>
  );
};
