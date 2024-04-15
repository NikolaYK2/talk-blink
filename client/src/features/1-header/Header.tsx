import s from './Header.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";

export const Header = () => {
  return (
    <header className={s.header}>
      <section>
        <div className={s.logo}>
          <IconSvg name={"logo"}/>
        </div>
        <nav>

        </nav>
      </section>
    </header>
  );
};
