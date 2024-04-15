import s from './Header.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Link} from "react-router-dom";
import {PATH} from "@/common/constants/conts.ts";

export const Header = () => {
  return (
    <header className={s.header}>
      <section>
        <Link to={PATH.ROUT_MAIN} className={s.logo}>
          <IconSvg name={"logo"}/>
        </Link>
        <nav>

        </nav>
      </section>
    </header>
  );
};
