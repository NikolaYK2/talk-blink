import {useInput} from "@/common/hooks/useInput.ts";
import {useEffect} from "react";
import {v1} from "uuid";
import {BASE_URL} from "@/common/instance/instance.ts";
import {ChatInput} from "@/common/components/ChatImput/ChatInput.tsx";
import {eventSourceApi} from "@/features/usersMessager/ui/eventSource/api/eventSourceApi.ts";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";
import {MessageType} from "@/features/usersMessager/model/UserMessagesProvider.tsx";

export const EventSourcing = () => {
  const {setValue, value, onChange} = useInput('')
  const {value: user} = useInput('');

  const {setUsersMessages} = useUsersMessages();
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
      setUsersMessages((prevMessages: MessageType[]) =>
        [...prevMessages, {date, ...message, isUser: message.username === user}]);
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


