import ws from 'ws'

const wss = new ws.Server({
  port: 5000,
}, () => console.log('Server started'));


type MessageType = {
  event: 'message' | 'connection',
  message: string,
  id: string,
  data: string,
  username: string
}
wss.on('connection', function connection(ws) {
  ws.on('message', function (message: MessageType) {
    message = JSON.parse(message.toString()) as MessageType;

    switch (message.event) {
      case 'message': {
        broadcastMessage(message);
        break
      }
      case 'connection': {
        broadcastMessage(message);
        break
      }
    }
  })
})

function broadcastMessage(message: MessageType) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message))
  })
}

// const message = {
//   event: 'message/connection',
//   id: 123,
//   data: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
//   username: 'Nikolos',
//   message: 'Hello World!'
// }