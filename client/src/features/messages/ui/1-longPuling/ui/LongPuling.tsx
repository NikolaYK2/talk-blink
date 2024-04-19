import {useInput} from "@/common/hooks/useInput.ts";
import {useEffect} from "react";
import {v1} from "uuid";
import {longPulingApi} from "@/features/messages/ui/1-longPuling/api/longPulingApi.ts";
import {MessageType} from "@/features/messages/ui/3-websocket/ui/Websocket.tsx";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";

type Props = {
  messages: MessageType[],
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

      setMessages((prevMessages: MessageType[]) => [...prevMessages, {data, ...res.data, isUser: false}]);
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
    <ChatInput value={value} onChange={onChange} callback={addMessageHandler}/>
  );
};
