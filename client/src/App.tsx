import {Header} from "@/features/1-header/Header.tsx";
import s from './App.module.scss'
import {Messages} from "@/features/messages/ui/Messages.tsx";

function App() {

  return (
    <div className={s.container}>
      <Header/>
      <Messages/>
    </div>
  )
}

export default App
