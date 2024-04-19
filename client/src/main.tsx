import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '@/assets/styles/index.scss'
import {PATH} from "@/common/constants/conts.ts";
import App from "@/App.tsx";
import {ProfileProvider} from "@/features/messages/ui/profile/model/ProfileProvider.tsx";
import {Profile} from "@/features/messages/ui/profile/ui/Profile.tsx";
import {Chat} from "@/features/messages/ui/chat/Chat.tsx";


const router = createBrowserRouter([
  {
    path: PATH.ROUT_MAIN,
    element: <App/>,
    children: [
      {path:PATH.ROUT_PROFILE, element: <Profile/>},
      {path:PATH.ROUT_CHAT, element: <Chat/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProfileProvider>
    <RouterProvider router={router}/>
  </ProfileProvider>,
)
