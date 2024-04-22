import * as Accordion from '@radix-ui/react-accordion';
import {ReactNode} from 'react';
import s from './AccordionApp.module.scss'

type AccordionRootType = {
  title: string;
  defaultValue: boolean,
  children: ReactNode,
}
export const AccordionApp = ({defaultValue = false, children, title}: AccordionRootType) => {
  return (
    <Accordion.Root className={s.containerAccordion} type='single' defaultValue={defaultValue ? title : ''} collapsible>
      <Accordion.Item className={s.blockAccordion} value={title}>
        {children}
      </Accordion.Item>
    </Accordion.Root>
  )
}

type Props = {
  children: ReactNode;
}
export const AccordionTrigger = ({children}: Props) => {
  return (
    <Accordion.Trigger className={s.trigger}>
      {children}
    </Accordion.Trigger>
  );
};


export const AccordionContent = ({children}: Props) => {
  return (
    <Accordion.Content className={s.content}>
      {children}
    </Accordion.Content>
  );
};



