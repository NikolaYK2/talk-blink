import s from './LongPuling.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Message} from "@/features/messages/Messages.tsx";

type Props = {
  messages: Message[]
  setMessages: (messages: Message[]) => void
}
export const LongPuling = ({messages, setMessages}: Props) => {
  const props = useInput('')
  const data = new Date()

  const addMessageHandler = () => {
    if (props.value !== '') setMessages([...messages, {data: data, message: props.value}])
    props.setValue('')
  }

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} {...props}/>
      <button className={s.btn} onClick={addMessageHandler}><IconSvg name={"addMessage"}/></button>
    </div>
  );
};
