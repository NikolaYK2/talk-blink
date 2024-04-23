import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {ReactNode} from 'react';
import s from './AccordionApp.module.scss'

type AccordionAppType = {
  title: string;
  defaultValue: boolean,
  children: ReactNode,
}
export const AccordionApp = ({defaultValue = false, children, title}: AccordionAppType) => {
  return (
    <Accordion.Root className={s.containerAccordion} type='single' defaultValue={defaultValue ? title : ''} collapsible>
      {children}
    </Accordion.Root>
  )
}

type AccordionItemType = Omit<AccordionAppType, 'defaultValue'>
export const AccordionItem = ({title, children}: AccordionItemType) => {
  return (
    <Accordion.Item className={s.accordionItem} value={title}>
      {children}
    </Accordion.Item>
  )
}

type Props = Omit<AccordionAppType, 'defaultValue' | 'title'>
export const AccordionTrigger = ({children}: Props) => {
  return (
    <Accordion.Trigger className={s.trigger}>
      {children}
      <ChevronDownIcon className={s.arrow} aria-hidden/>
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



