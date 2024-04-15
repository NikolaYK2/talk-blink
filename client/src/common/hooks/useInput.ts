import {ChangeEvent, useState} from "react";


export const useInput = (initialization: string) => {
  const [value, setValue] = useState(initialization);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  return {value, onChange}
};
