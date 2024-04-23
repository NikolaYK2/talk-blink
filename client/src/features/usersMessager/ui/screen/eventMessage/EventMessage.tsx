import s from './EventMessage.module.scss'

type EventType = 'connection' | 'disconnect'
type Props = {
  event: EventType,
  username: string,
  isUser: boolean,
  message: string,
  data: string
}
export const eventMessage = ({event, username, isUser, message, data}: Props) => {
  const getMessages = (event: EventType) => {
    return <div
      className={s.connected}>user <span>{username}</span>{event === 'connection' ? 'connected' : 'disconnected'}</div>
  }

  switch (event) {
    case 'connection': {
      return getMessages('connection');
    }
    case 'disconnect': {
      return getMessages('disconnect');
    }
    default: {
      return <div className={`${s.blockUser} ${!isUser && s.blockMessageUser}`}>

        <div className={`${s.blockMessage}`}>
          <div className={`${s.message}`}>
            {message}
          </div>
          <div className={s.data}>
            {data}
          </div>
        </div>

        <div className={s.name}>{username}</div>
      </div>
    }
  }
}