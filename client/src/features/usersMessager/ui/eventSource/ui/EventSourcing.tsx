import {useInput} from "@/common/hooks/useInput.ts";
import {useEffect} from "react";
import {v1} from "uuid";
import {BASE_URL} from "@/common/instance/instance.ts";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";
import {MessageType} from "@/features/usersMessager/ui/websocket/ui/Websocket.tsx";
import {eventSourceApi} from "@/features/usersMessager/ui/eventSource/api/eventSourceApi.ts";

type Props = {
  messages: MessageType[],
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

    eventSource.onmessage = function (event) {//есть слушатели для перехватов ошибок сообщений и так далее
      const message = JSON.parse(event.data);
      const date = new Date();
      setMessages((prevMessages: MessageType[]) => [...prevMessages, {date, ...message, isUser: false}]);
      setValue('');
    }
  }

  useEffect(() => {
    subscribe().catch(e => console.error(e));
  }, []);

  return (
    <ChatInput value={value} onChange={onChange} callback={addMessageHandler}/>
  );
};


