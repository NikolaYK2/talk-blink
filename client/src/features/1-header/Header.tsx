import s from './Header.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "@/common/constants/conts.ts";

export const Header = () => {

  const routes = [
    {link: 'profile', name: 'profile'} as const,
    {link: 'chat', name: 'chats'} as const
  ]


  return (
    <header className={s.header}>
      <Link to={PATH.ROUT_MAIN} className={s.logo}>
        <IconSvg name={"logo"}/>
      </Link>
      <nav className={s.nav}>
        {routes.map((route) =>
          <ul className={s.blockRout}>
            <li className={s.rout}>
              <NavLink to={route.link}>
                <IconSvg name={route.name}/>
              </NavLink>

            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
