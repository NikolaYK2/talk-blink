import ws from 'ws'

const wss = new ws.Server({
  port: 5000,
}, () => console.log('Server started'));

let connections: MessageType[] = [];

type MessageType = {
  event: 'message' | 'connection' | 'disconnect',
  message: string,
  id: string,
  data: string,
  username: string
}
wss.on('connection', function connection(ws) {
  let currentUser:MessageType | null = null;

  ws.on('message', function (message: MessageType) {
    message = JSON.parse(message.toString()) as MessageType;

    switch (message.event) {
      case 'message': {
        broadcastMessage(message);
        break
      }
      case 'connection': {
        currentUser = message; // сохраняем текущего пользователя
        connections.push(currentUser); // сохраняем историю подключившихся пользователей
        ws.send(JSON.stringify(connections)); // отправляем историю
        broadcastMessage(message);
        broadcastConnections();
        break
      }
    }
  })
  ws.on('close', function () {
    if (currentUser){
      connections = connections.filter(connection => connection.id !== currentUser?.id);
      broadcastMessage({...currentUser, event: 'disconnect'});// отправляем сообщение об отключении
      broadcastConnections();
    }
  });
})

function broadcastMessage(message: MessageType) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message))
  })
}

function broadcastConnections() {//отправляем историю пользователей всем кто был подключенным
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(connections));
  });
}

// const message = {
//   event: 'message/connection',
//   id: 123,
//   data: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
//   username: 'Nikolos',
//   message: 'Hello World!'
// }