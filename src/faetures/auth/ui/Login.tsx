import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import s from './Login.module.scss'
import {Auth} from "@/faetures/auth/ui/Auth.tsx";


const netwoks = [
  {id: '1', name: 'google', title: 'Sign In with Google'},
  {id: '2', name: 'facebook', title: 'Sign In with Facebook'},
]

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
        <h2>Welcome Back!</h2>

        <Auth/>

        <div>
          {netwoks.map(el => <div key={el.id}>
            <IconSvg name={el.name}/>
            <span>{el.title}</span>
          </div>)}
        </div>

      </div>

      <div className={s.background2}>
      </div>

    </div>
  );
};

