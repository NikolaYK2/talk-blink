import s from './LongPuling.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";
import {IconSvg} from "@/common/components/IconSVG.tsx";

export const LongPuling = () => {
  const props = useInput('')

  return (
    <div className={s.containerLongPuling}>
      <textarea className={s.input} {...props}/>
      <button className={s.btn}><IconSvg name={"addMessage"}/></button>
    </div>
  );
};
