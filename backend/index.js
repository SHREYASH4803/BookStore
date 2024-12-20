import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, mongoDBURL } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('check');
});

app.use('/books', booksRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

export default app; 
