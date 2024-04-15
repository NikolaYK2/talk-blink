import s from './Messages.module.scss'
import {Profile} from "@/common/components/profile/Profile.tsx";
import {LongPuling} from "@/features/messages/longPuling/LongPuling.tsx";

export const Messages = () => {
  return (
    <section className={s.containerMessages}>
      <Profile/>
      <LongPuling/>
    </section>
  );
};
