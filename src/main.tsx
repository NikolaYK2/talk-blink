import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "@/faetures/auth/ui/login/Login.tsx";
import '@/assets/styles/index.scss'
import {AuthForm} from "@/common/components/authForm/AuthForm.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    children:[
      {
        path:'/login',
        element:<AuthForm auth={'logIn'} title={'Welcome Back !'}/>
      },
      {
        path:'/register',
        element:<AuthForm auth={'register'} title={'Register Account'}/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
)
