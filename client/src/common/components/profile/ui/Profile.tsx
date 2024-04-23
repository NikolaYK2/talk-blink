import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useProfile} from "@/common/components/profile/lib/useProfile.ts";

type Props = {
  className?: string,
}
export const Profile = ({className}: Props) => {

  const {profile} = useProfile();

  return (
    <div className={`${s.containerProfile}`}>
      <div className={`${s.blockProfile} ${className}`}>
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
