import cors from 'cors';
import express from 'express';
import * as events from "node:events";

const PORT = 5000;

//управление событиями
const emitter = new events.EventEmitter();


const app = express();

app.use(cors());
//парсим json
app.use(express.json());

//Для получения сообщений
app.get('/get-messages', (req, res) => {
  //Уведомление что пользователь смс отправил
  emitter.once('newMessages', (message) => {
    console.log(message)
    res.json(message);
  })
})
//На отправку
app.post('/new-messages', (req, res) => {
  //достаем сообщение из тела запроса
  const message = req.body;
  emitter.emit('newMessages', message);
  // res.status(200)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})