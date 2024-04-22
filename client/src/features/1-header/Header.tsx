import s from './Header.module.scss'
import {IconSvg} from "@/common/components/IconSVG.tsx";
import {Link, NavLink, useMatch} from "react-router-dom";
import {PATH} from "@/common/constants/conts.ts";
import * as HoverCard from '@radix-ui/react-hover-card';

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
        <ul className={s.blockRout}>
          {routes.map((route) => {
              const match = useMatch(route.link);
              return (
                <li className={s.rout} key={route.link}>
                  <HoverCard.Root>
                    <HoverCard.Trigger asChild>
                      <NavLink to={route.link} className={match ? s.isActive : ''}>
                        <IconSvg name={route.name}/>
                      </NavLink>
                    </HoverCard.Trigger>
                    <HoverCard.Portal>
                      <HoverCard.Content className={s.hoverRout} sideOffset={1}>
                        <div className={s.hoverText}>{route.name}</div>
                        <HoverCard.Arrow className={s.hoverRoutArrow}/>
                      </HoverCard.Content>
                    </HoverCard.Portal>
                  </HoverCard.Root>
                </li>
              )
            }
          )}
        </ul>
      </nav>
    </header>
  );
};
