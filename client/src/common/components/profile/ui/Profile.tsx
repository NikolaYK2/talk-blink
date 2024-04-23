import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {useUserHub} from "@/features/userHub/lib/useUserHub.ts";

type Props = {
  className?: string,
}
export const Profile = ({className}: Props) => {

  const {profile} = useUserHub();

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
