import s from './UserHub.module.scss'
import {Outlet} from "react-router-dom";

export const UserHub = () => {
  return (
    <div className={s.containerUserHub}>
      <Outlet/>
    </div>
  );
};
