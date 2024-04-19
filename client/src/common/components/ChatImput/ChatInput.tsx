import {IconSvg} from "@/common/components/IconSVG.tsx";
import s from './ChatInput.module.scss'
import {ChangeEvent} from "react";

type Props = {
  value: string,
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void,
  callback: () => void,
}
export const ChatInput = ({value, onChange, callback}:Props) => {

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange}/>
      <button className={`${s.btn}`} onClick={callback}><IconSvg name={"addMessage"}/>
      </button>
    </div>
  );
};
