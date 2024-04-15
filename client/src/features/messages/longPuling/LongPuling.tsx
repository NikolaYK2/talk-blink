import s from './LongPuling.module.scss'
import {useInput} from "@/common/hooks/useInput.ts";

export const LongPuling = () => {
  const props = useInput('')

  return (
    <div className={s.containerLongPuling}>
      <textarea {...props}/>
      <button>add</button>
    </div>
  );
};
