import cors from 'cors';
import express from 'express';
import * as events from "node:events";

const PORT = 5000;

const emitter = new events.EventEmitter();


const app = express();

app.use(cors());
app.use(express.json());

//Для получения сообщений
app.get('/connect', (req, res) => {
  //указываем заголовки
  res.writeHead(200, {
    'Connection': 'keep-alive', //держать подключение
    'Content-type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });
  emitter.on('newMessages', (message) => {
    res.write(`data: ${JSON.stringify(message)} \n\n`);
  });
})

app.post('/new-messages', (req, res) => {
  const message = req.body;
  emitter.emit('newMessages', message);
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})

