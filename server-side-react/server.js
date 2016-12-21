import express from 'express';
import { match } from 'react-router';
import routes from './sampleApp/config/routes';

const app = express();
app.get('*', (req, res, next) => {
  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    /* ... */
  });
});
const port = 8001;
const server = app.listen(port, () => console.log('Server started', server.address()));
