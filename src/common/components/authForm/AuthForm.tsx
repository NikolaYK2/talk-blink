import {BtnPolymorphic} from "@/common/components/btn/BtnPolymorphic.tsx";
import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import s from './Auth.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import {fnValidPas, minLength, pattern, textFill} from "@/common/components/authForm/validateErrors.ts";


const netwoks = [
  {id: '1', name: 'google'},
  {id: '2', name: 'facebook'},
]

type FieldType = {
  label: string
  type: string
  name: 'email' | 'username' | 'password' | 'passwordRepeat',
  setting?: any,

}

type Type = {
  email: string,
  username: string,
  password: string,
  passwordRepeat: string,
}

type Props = {
  auth: 'logIn' | 'register',
  title: string
}
export const AuthForm = ({auth, title}: Props) => {

  const fields: FieldType[] = [
    {label: 'Username', type: 'text', name: 'username'},
    {label: 'Password', type: 'password', name: 'password', setting: minLength},
  ];


  const verification = auth === 'logIn';

  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
    }
  })

  const onSubmit: SubmitHandler<Type> = data => {

  }

  if (auth === 'register') {
    fields.unshift({label: 'Email', type: 'email', name: 'email', setting: pattern});
    fields.push({label: 'Password repeat', type: 'password', name: 'passwordRepeat', setting: fnValidPas(watch)});
  }


  return (
    <div className={s.container}>
      <h2>{title}</h2>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field) => <label>

            <div className={s.blockFieldInfo}>
              <span className={`${s.span} ${watch(field.name) && s.mod}`}>{field.label}</span>
              <p className={s.errors}>{`: ${errors[field.name]?.message || ''}`}</p>
            </div>

            <div className={s.input}>
              <input type={field.type}
                     {...register(field.name, {
                       required: textFill,
                       ...field.setting
                     })}/>
            </div>
          </label>
        )}

        {auth === 'logIn' &&
            <label className={s.checkBox}>
                <input type="checkbox"/><span>Remember me</span>
            </label>}

        <BtnPolymorphic fullWidth>Register</BtnPolymorphic>
      </form>

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

    </div>
  );
};

