import {instance} from "@/common/instance/instance.ts";


type MessageType = {
  id: string,
  message: string,
  isUser:boolean,
}
type ResponseType = {
  id: number,
  message: string,
  isUser:boolean,
}
export const longPulingApi = {
  addMessage(message: MessageType) {
    return instance.post('/new-messages', message)
  },
  getMessage() {
    return instance.get<ResponseType>('/get-messages')
  }
}