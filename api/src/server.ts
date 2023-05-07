import express from 'express';
import logger from 'jet-logger';
import postController from '@src/controllers/post.controller';
import fileDb from '@src/db/filrDb';
import cors from 'cors';

const app = express();
const PORT = 8000;

fileDb.init();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('/posts', postController);

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});