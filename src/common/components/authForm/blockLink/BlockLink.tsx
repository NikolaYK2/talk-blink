import {BtnPolymorphic} from "@/common/components/btn/BtnPolymorphic.tsx";
import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import {NavLink} from "react-router-dom";
import s from './BlockLink.module.scss'


const netwoks = [
  {id: '1', name: 'google'},
  {id: '2', name: 'facebook'},
]


type Props = {
  auth: 'logIn' | 'register',
}

export const BlockLink = ({auth}:Props) => {
  const verification = auth === 'logIn';

  return (
    <>
      <div className={s.linkSpan}>
        <span>Sign up using</span>
      </div>

      <div className={s.blockLink}>
        {netwoks.map(el => <div key={el.id} className={s.link}>
          <BtnPolymorphic as={'a'} className={s.modDefault}><IconSvg name={el.name}/></BtnPolymorphic>
        </div>)}
      </div>

      <div className={s.blockSwitch}>
        <span>{verification ? 'Don\'t have an account ?' : 'Already have an account ?'}</span>
        <BtnPolymorphic as={NavLink}
                        className={s.mo}
                        to={verification ? '/register' : '/login'}
                        variant={"link"}>{verification ? 'Register' : 'Login'}
        </BtnPolymorphic>
      </div>
    </>
  );
};
