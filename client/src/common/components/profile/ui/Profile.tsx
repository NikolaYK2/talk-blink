import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";
import {useUsersMessages} from "@/features/usersMessager/lib/useUsersMessages.ts";

type Props = {
  className?: string,
  btnBack?: boolean,
}
export const Profile = ({className, btnBack = false}: Props) => {

  const {profile} = useUserHub();
  const {setStyle} = useUsersMessages();

  return (
    <div className={`${s.containerProfile}`}>
      <div className={`${s.blockProfile} ${className}`}>

        {btnBack &&
            <div className={s.backBtn} onClick={() => setStyle('')}>
                <IconSvg name={"back"}/>
            </div>}

        <div className={s.avatar}>
          <IconSvg name={'ava'}/>
        </div>
        <div className={s.name}>
          {profile.username}
          {profile.username && <div className={s.online}></div>}
        </div>
      </div>
    </div>
  );
};
