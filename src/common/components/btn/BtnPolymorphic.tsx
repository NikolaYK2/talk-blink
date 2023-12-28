import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './BtnPolymorphic.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  item?: string // добавить это
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const BtnPolymorphic = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {as: Component = 'button', className, fullWidth, variant = 'primary', item, ...rest} = props

  if (item) {
    return <img src={item} alt="" {...rest} />;
  }

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  );
};