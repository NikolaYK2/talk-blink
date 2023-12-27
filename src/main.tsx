import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "@/faetures/auth/ui/Login.tsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  </BrowserRouter>
)
