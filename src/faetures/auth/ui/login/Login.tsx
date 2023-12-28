import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import {AuthForm} from "@/faetures/auth/ui/login/authForm/AuthForm.tsx";
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

        <div className={s.background2}>
            <IconSvg name={"feather"}/>
        </div>

      </div>

      <div className={s.blockItem}>
        <AuthForm auth={"register"} title={'Register Account'}/>
      </div>


    </div>
  );
};

