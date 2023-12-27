import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import s from './Login.module.scss'

export const Login = () => {
  return (
    <div className={s.container}>

      <div className={s.blockLogo}>
        <div className={s.logo}>
          <IconSvg name={'logo'}/>
          <h1>Talk Blink</h1>
        </div>
        <p>Adaptive app for chat</p>
      </div>

      <div className={s.blockItem}>
        <h2>Welcome to Talk Blink!</h2>
        <div>
          <div>
            <IconSvg name={"google"}/>
            <span>Sign In with Google</span>
          </div>
          <div>
            <IconSvg name={"facebook"}/>
            <span>Sign In with Facebook</span>
          </div>
        </div>
      </div>

      <div className={s.background2}>
      </div>

    </div>
  );
};

