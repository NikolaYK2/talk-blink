import {Header} from "@/features/1-header/Header.tsx";
import {Outlet} from "react-router-dom";
import s from './App.module.scss'

function App() {

  return (
    <div className={s.container}>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
