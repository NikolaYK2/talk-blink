import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import '@/assets/styles/index.scss'
import {PATH} from "@/common/constants/conts.ts";
import App from "@/App.tsx";
import {ProfileDetails} from "@/features/userHub/ui/profileDetails/ui/ProfileDetails.tsx";
import {Chats} from "@/features/userHub/ui/chats/Chats.tsx";
import {UserHubProvider} from "@/features/userHub/model/UserHubProvider.tsx";


const router = createBrowserRouter([
  {
    path: PATH.ROUT_MAIN,
    element: <App/>,
    children: [
      {path: PATH.ROUT_PROFILE, element: <ProfileDetails title={'my profile'}/>},
      {path: PATH.ROUT_CHAT, element: <Chats title={'chats'}/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserHubProvider>
    <RouterProvider router={router}/>
  </UserHubProvider>,
)
