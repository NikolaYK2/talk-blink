import s from './ProfileDetails.module.scss'
import {AccordionContent, AccordionApp, AccordionTrigger} from "@/common/components/accordion/AccordionApp.tsx";
import {About} from "@/features/messages/ui/profileDetails/about/About.tsx";
import {Profile} from "@/common/components/profile/ui/Profile.tsx";
import {IconSvg} from "@/common/components/IconSVG.tsx";

type Props = {
  title: string
}
export const ProfileDetails = ({title}: Props) => {


  return (
    <section className={s.container}>
      <div className={s.title}>{title}</div>
      <Profile/>
      <section className={s.details}>
        <AccordionApp title={'about'} defaultValue>
          <AccordionTrigger>
            <IconSvg name={"profile"}/>
            about
          </AccordionTrigger>
          <AccordionContent>
            <About/>
          </AccordionContent>
        </AccordionApp>
      </section>
    </section>
  );
};
