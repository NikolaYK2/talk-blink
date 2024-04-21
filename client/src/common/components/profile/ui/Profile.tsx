import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useProfile} from "@/common/components/profile/lib/useProfile.ts";

type Props = {
  title?: string,
  className?: string,
}
export const Profile = ({className, title}: Props) => {

  const {profile} = useProfile();

  return (
    <div className={`${s.containerProfile}`}>
      <div>{title}</div>
      <div className={`${s.blockProfile} ${className}`}>
        <div className={s.avatar}>
          <IconSvg name={'ava'}/>
        </div>
        <div className={s.name}>{profile.username}</div>
        {profile.username && <div className={s.online}></div>}
      </div>
    </div>
  );
};
