import {ComponentPropsWithoutRef} from "react";
import s from './Btn.module.scss'

type Props = {
  className?: string,
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<'button'>


export const Btn = ({fullWidth, className, variant = 'primary', ...rest}: Props) => {
  return (
    <button className={`${s[variant]} ${className} ${fullWidth ? s.fullWidth : ''}`} {...rest}/>
  );
};
