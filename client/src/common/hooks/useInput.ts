import {ChangeEvent, useState} from "react";


type ChangeEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>

export const useInput = (initialization: string) => {
  const [value, setValue] = useState(initialization);

  const onChange = (e: ChangeEvents) => {
    setValue(e.currentTarget.value);
  }

  return {value, onChange, setValue}
};
