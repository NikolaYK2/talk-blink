import {useInput} from "@/common/hooks/useInput.ts";
import {useEffect} from "react";
import {v1} from "uuid";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";
import {longPulingApi} from "@/features/usersMessager/ui/longPuling/api/longPulingApi.ts";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";
import {MessageType} from "@/features/usersMessager/model/UserMessagesProvider.tsx";

export const LongPuling = () => {
  const {setValue, value, onChange} = useInput('');
  const {value: user} = useInput('');
  const {setUsersMessages} = useUsersMessages();

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
      const data = new Date().toLocaleTimeString();

      setUsersMessages((prevMessages: MessageType[]) =>
        [...prevMessages, {
          data, ...res.data,
          isUser: res.data.message === user,
          username: '',
          message: '',
          event: 'message',
          id: '1'
        }]);
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
