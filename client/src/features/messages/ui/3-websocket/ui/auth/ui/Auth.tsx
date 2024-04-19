import {ChangeEvent, useState, KeyboardEvent} from "react";
import s from './Auth.module.scss'
import {Btn} from "@/common/components/btn/Btn.tsx";
import {checkFill} from "@/common/utils/checkFill.ts";

type Props = {
  user: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onCLick: () => void,
}
export const Auth = ({user, onCLick, onChange}: Props) => {

  const [isError, serIsError] = useState(false);

  const checkClickHandler = () => {
    if (checkFill(user)) {
      onCLick();
    } else {
      serIsError(true)
    }
  }

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkClickHandler();
    }
  }

  return (
    <div className={s.containerAuth}>
      <div className={s.blockAuth}>
        <input className={`${s.input} ${isError && s.inputError}`}
               type="text"
               placeholder={isError ? 'Need name...' : 'What\'s your name?'}
               value={user}
               onChange={onChange}
               onKeyDown={keyDownHandler}
        />

        <Btn onClick={checkClickHandler} fullWidth={true}>Join</Btn>
      </div>
    </div>
  );
};
