import {BtnPolymorphic} from "@/common/components/btn/BtnPolymorphic.tsx";
import {IconSvg} from "@/common/components/img/IconSvg.tsx";
import s from './Auth.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";


const netwoks = [
  {id: '1', name: 'google', title: 'Sign In with Google'},
  {id: '2', name: 'facebook', title: 'Sign In with Facebook'},
]

type FieldType ={
  label:string
  type:string
  name: 'email' | 'username' | 'password' | 'passwordRepeat'
}

type Type={
  email: string,
  username: string,
  password: string,
  passwordRepeat: string,
}

type Props = {
  auth: 'logIn' | 'register',
  title: string
}
export const AuthForm = ({auth,title}: Props) => {

  const fields:FieldType[] = [
    {label: 'Username', type: 'text', name: 'username'},
    {label: 'Password', type: 'password', name: 'password'},
  ];

  if (auth === 'register') {
    fields.unshift({label: 'Email', type: 'email', name: 'email'});
    fields.push({label: 'Password repeat', type: 'password', name: 'passwordRepeat'});
  }

  const {register, handleSubmit,watch} = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
    }
  })

  const onSubmit: SubmitHandler<Type> = data => {

  }
  return (
    <div className={s.container}>
      <h2>{title}</h2>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field) => <label>
            <span className={`${s.span} ${watch(field.name) && s.mod}`}>{field.label}</span>
            <div className={s.input}><input type={field.type} {...register(field.name)}/></div>
          </label>
        )}

        {auth === 'logIn' &&
            <label>
                <div><input type="checkbox"/><span>Remember me</span></div>
            </label>}

        <BtnPolymorphic fullWidth>Register</BtnPolymorphic>
      </form>

      <div>
        {netwoks.map(el => <div key={el.id}>
          {/*<IconSvg name={el.name}/>*/}
          <span>{el.title}</span>
        </div>)}
      </div>

    </div>
  );
};

