import express, { Request, Response } from 'express';
import cors from 'cors';

const LISTEN_PORT = process.env.LISTEN_PORT || 4100;

const app = express()
  .use(express.json())
  .use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, world wide web!' });
});

app.listen(LISTEN_PORT, () => console.log(`Server started on port ${LISTEN_PORT}`));
