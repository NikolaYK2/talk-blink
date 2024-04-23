import s from './ProfileDetails.module.scss'
import {
  AccordionApp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/common/components/accordion/AccordionApp.tsx";
import {About} from "@/features/messages/ui/profileDetails/about/About.tsx";
import {Profile} from "@/common/components/profile/ui/Profile.tsx";
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Other} from "@/features/messages/ui/profileDetails/other/Other.tsx";
import {ReactElement} from "react";

type IconType = 'profile' | '' | 'files'
type DetailsType = {
  defaultOpen?: boolean
  title: string,
  data: ReactElement,
  icon?: IconType,
}
type Props = {
  title: string
}
export const ProfileDetails = ({title}: Props) => {

  const details: DetailsType[] = [
    {defaultOpen: true, title: 'about', data: <About/>, icon: 'profile'},
    {title: 'other', data: <Other/>, icon: 'files'},
  ]

  const defaultValue = details.find(el => el.defaultOpen)

  return (
    <section className={s.container}>
      <h2 className={'h2App'}>{title}</h2>
      <Profile className={s.profile}/>
      <section className={s.details}>
        <AccordionApp title={defaultValue?.title || ''} defaultValue>
          {details.map((el) => <div key={el.title}>
              <AccordionItem title={el.title}>
                <AccordionTrigger>
                  <IconSvg name={el.icon ? el.icon : ''}/>
                  {el.title}
                </AccordionTrigger>
                <AccordionContent>
                  {el.data}
                </AccordionContent>
              </AccordionItem>
            </div>
          )}
        </AccordionApp>
      </section>
    </section>
  );
};
