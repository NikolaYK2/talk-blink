import {ChangeEvent} from "react";

type Props = {
  user: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onCLick: () => void,
}
export const Auth = ({user, onCLick, onChange}: Props) => {
  return (
    <div>
      <div>
        <input type="text" value={user} onChange={onChange}/>
        <button onClick={onCLick}>sign in</button>
      </div>
    </div>
  );
};
