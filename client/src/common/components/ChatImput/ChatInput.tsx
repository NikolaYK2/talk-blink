import {IconSvg} from "@/common/components/IconSVG.tsx";
import s from './ChatInput.module.scss'
import {ChangeEvent, KeyboardEvent} from "react";
import {Btn} from "@/common/components/btn/Btn.tsx";
import {checkFill} from "@/common/utils/checkFill.ts";

type Props = {
  value: string,
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void,
  callback: () => void,
}
export const ChatInput = ({value, onChange, callback}: Props) => {

  const enterMessageHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && checkFill(value)) {
      callback();
    }
  }

  const clickHandler = () => {
    if (checkFill(value)) callback();
  }

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange} onKeyDown={enterMessageHandler}/>
      <Btn className={s.svg} onClick={clickHandler}>
        <IconSvg name={"addMessage"}/>
      </Btn>
    </div>
  );
};
