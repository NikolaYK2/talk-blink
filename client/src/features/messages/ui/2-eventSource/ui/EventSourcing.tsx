import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Message} from "@/features/messages/ui/Messages.tsx";
import {useEffect} from "react";
import {v1} from "uuid";
import {BASE_URL} from "@/common/instance/instance.ts";
import s from './EventSourse.module.scss'
import {eventSourceApi} from "@/features/messages/ui/eventSourse/api/eventSourceApi.ts";

type Props = {
  messages: Message[],
  setMessages: (messages: any) => void
}
export const EventSourcing = ({setMessages}: Props) => {
  const {setValue, value, onChange} = useInput('')
  const hasValue = value !== '';

  const addMessageHandler = async () => {
    if (hasValue) {
      await eventSourceApi.addMessage({id: v1(), message: value, isUser: true});
    }
  }

  const subscribe = async () => {
    const eventSource = new EventSource(BASE_URL + 'connect');

    eventSource.onmessage = function (event){//есть слушатели для перехватов ошибок сообщений и так далее
      const message = JSON.parse(event.data);
      const date = new Date();
      setMessages((prevMessages: Message[]) => [...prevMessages, {date, ...message, isUser: false}]);
      setValue('');
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


