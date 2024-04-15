import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '@/assets/styles/index.scss'
import {PATH} from "@/common/constants/conts.ts";
import App from "@/App.tsx";
import {Messages} from "@/features/messages/Messages.tsx";


const router = createBrowserRouter([
  {
    path: PATH.ROUT_MAIN,
    element: <App/>,
    children: [
      {index: true, element: <Messages/>},
      {path: PATH.ROUT_MESSAGES, element: <Messages/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
