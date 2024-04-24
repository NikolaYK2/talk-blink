import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";
import s from './Chats.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";

type Props = {
  title: string
}
export const Chats = ({title}: Props) => {
  const {users} = useUserHub();
  const {setStyle} = useUsersMessages();

  return (
    <section className={s.container}>
      <h2 className={'h2App'}>{title}</h2>
      <div className={s.block}>
        {users.map(el =>
          <div key={el.id} className={s.item} onClick={()=>setStyle(s.isActive)}>
            <div className={s.avatar}><IconSvg name={"ava"}/></div>
            <div className={s.name}>{el.username}</div>
            <div className={s.data}>{el.data}</div>
          </div>
        )}
      </div>
    </section>
  );
};
