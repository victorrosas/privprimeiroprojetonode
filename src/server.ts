import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
