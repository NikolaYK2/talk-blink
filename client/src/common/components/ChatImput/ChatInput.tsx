import {IconSvg} from "@/common/components/IconSVG.tsx";
import s from './ChatInput.module.scss'
import {ChangeEvent} from "react";
import {Btn} from "@/common/components/btn/Btn.tsx";

type Props = {
  value: string,
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void,
  callback: () => void,
}
export const ChatInput = ({value, onChange, callback}: Props) => {

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} value={value} onChange={onChange}/>
      <Btn className={s.svg} onClick={callback}>
        <IconSvg name={"addMessage"}/>
      </Btn>
    </div>
  );
};
