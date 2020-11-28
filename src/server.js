import 'dotenv/config';
import express from 'express';
const { setQueues, router } = require('bull-board')


import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();
setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', router);


app.listen(process.env.PORT, () => {
  console.log(`Server running on the ${process.env.PORT}`)
});