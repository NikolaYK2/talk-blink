import s from './Screen.module.scss'
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";
import {eventMessage} from "@/features/usersMessager/ui/screen/eventMessage/EventMessage.tsx";

export const Screen = () => {

  const {usersMessages} = useUsersMessages();

  return (
    <div className={s.containerScreen}>
      {usersMessages.map((message) => <div key={message.id} className={`${s.blockItem}`}>
          {eventMessage(message)}
        </div>
      )}
    </div>
  );
};


