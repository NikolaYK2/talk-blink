import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useProfile} from "@/features/messages/ui/profile/lib/useProfile.ts";


export const Profile = () => {

  const {profile} = useProfile();

  return (
    <div className={`${s.containerProfile}`}>
      <div className={s.blockProfile}>
        <div className={s.avatar}>
          <IconSvg name={'ava'}/>
        </div>
        <div className={s.name}>{profile.username}</div>
        {profile.username && <div className={s.online}></div>}
      </div>
    </div>
  );
};
