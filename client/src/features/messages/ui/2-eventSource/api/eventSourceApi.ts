import {instance} from "@/common/instance/instance.ts";


type MessageType = {
  id: string,
  message: string,
  isUser:boolean,
}
type ResponseType = {
  id: number,
  message: string,
  user:boolean,
}
export const eventSourceApi = {
  addMessage(message: MessageType) {
    return instance.post<ResponseType>('/new-messages', message)
  },
}