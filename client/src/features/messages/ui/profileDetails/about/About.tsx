import {useProfile} from "@/common/components/profile/lib/useProfile.ts";
import s from './About.module.scss'

export const About = () => {

  const {profile} = useProfile();

  const about = [
    {label: 'name', name: profile.username,},
    {label: 'time', name: profile.data,},
  ]

  return (
    <ul>
      {about.map(el => <li className={s.container} key={el.label}>
        <span >{el.label}</span>
        <p style={{textTransform: el.label === 'email' ? "uppercase" : 'capitalize'}}>{el.name}</p>
      </li>)}
    </ul>
  );
};
