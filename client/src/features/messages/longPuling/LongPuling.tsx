import s from './LongPuling.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Message} from "@/features/messages/Messages.tsx";
import {v1} from "uuid";

type Props = {
  messages: Message[]
  setMessages: (messages: Message[]) => void
}
export const LongPuling = ({messages, setMessages}: Props) => {
  const {setValue, value, onChange} = useInput('')
  const data = new Date()
  const hasValue = value !== '';

  const addMessageHandler = async () => {
    const id = v1()
    if (hasValue) setMessages([...messages, {id: id, data: data, message: value}])
    setValue('')
  }

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange}/>
      <button className={`${s.btn}`} onClick={addMessageHandler}><IconSvg name={"addMessage"}/>
      </button>
    </div>
  );
};
