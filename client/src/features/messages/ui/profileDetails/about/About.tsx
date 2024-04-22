import {useProfile} from "@/common/components/profile/lib/useProfile.ts";

export const About = () => {

  const {profile} = useProfile();

  const about = [
    {label: 'name', name: profile.username,},
    {label: 'time', name: profile.data,},
  ]

  return (
    <ul>
      {about.map(el => <li key={el.label}>
        <div>{el.label}</div>
        <div>{el.name}</div>
      </li>)}
    </ul>
  );
};
