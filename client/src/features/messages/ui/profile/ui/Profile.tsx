import s from './Profile.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";


export const Profile = () => {
  return (
    <div className={`${s.containerProfile}`}>
      <div className={s.blockProfile}>
        <div className={s.avatar}>
          <IconSvg name={'ava'}/>
        </div>
        <div className={s.name}>Nikolay</div>
      </div>
    </div>
  );
};
