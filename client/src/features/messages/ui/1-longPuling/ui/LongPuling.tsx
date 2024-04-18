import s from './LongPuling.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Message} from "@/features/messages/ui/Messages.tsx";
import {useEffect} from "react";
import {v1} from "uuid";
import {longPulingApi} from "@/features/messages/ui/longPuling/api/longPulingApi.ts";

type Props = {
  messages: Message[],
  setMessages: (messages: any) => void
}
export const LongPuling = ({setMessages}: Props) => {
  const {setValue, value, onChange} = useInput('')
  const hasValue = value !== '';
  const addMessageHandler = async () => {

    if (hasValue) {
      await longPulingApi.addMessage({id: v1(), message: value, isUser: true});
    }
  }

  //подписываемся на получение сообщений
  const subscribe = async () => {
    try {
      const res = await longPulingApi.getMessage();
      const data = new Date();

      setMessages((prevMessages: Message[]) => [...prevMessages, {data, ...res.data, isUser: false}]);
      setValue('')
      //отправляем запрос и ждем сообщения
      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 500)
    }
  }
  useEffect(() => {
    subscribe().catch(e => console.error(e));
  }, []);

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange}/>
      <button className={`${s.btn}`} onClick={addMessageHandler}><IconSvg name={"addMessage"}/>
      </button>
    </div>
  );
};
