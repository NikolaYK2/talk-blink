import {ChangeEvent, useState} from "react";
import {checkFill} from "@/common/utils/checkFill.ts";


type ChangeEvents =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>

export const useInput = (initialization: string) => {
  const [value, setValue] = useState(initialization);

  const onChange = (e: ChangeEvents) => {
    if (checkFill(value)) setValue(e.currentTarget.value);
  }

  return {value, onChange, setValue}
};
