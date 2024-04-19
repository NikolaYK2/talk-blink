import {ChangeEvent} from "react";
import s from './Auth.module.scss'
import {Btn} from "@/common/components/btn/Btn.tsx";

type Props = {
  user: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onCLick: () => void,
}
export const Auth = ({user, onCLick, onChange}: Props) => {


  return (
    <div className={s.containerAuth}>
      <div className={s.blockAuth}>
        <input className={s.input} type="text" placeholder={'What is your name?'} value={user} onChange={onChange}/>
        <Btn onClick={onCLick} fullWidth={true}>Join</Btn>
      </div>
    </div>
  );
};
