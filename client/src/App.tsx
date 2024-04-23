import {Header} from "@/features/1-header/Header.tsx";
import s from './App.module.scss'
import {UserHub} from "@/features/userHub/ui/UserHub.tsx";
import {Messages} from "@/features/usersMessager/ui/Messages.tsx";

function App() {

  return (
    <div className={s.container}>
      <Header/>
      <UserHub/>
      <Messages/>
    </div>
  )
}

export default App
