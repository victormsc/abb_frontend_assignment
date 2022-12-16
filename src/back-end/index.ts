/**
 * @file  Small http and WebSocket server to test the ABB Frontend Assignment.
 */

import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import { Server } from 'socket.io';
import { generateRandomInspectionData } from './data-generation';
import { InspectionData } from './types';

interface ServerToClientEvents {
  newData: (inspectionData: InspectionData) => void;
}

const PORT = 3000;
const PERIOD_SECONDS = 5;

const runApplication = async () => {
  /* Directory with public files generated by webpack.
   */
  const publicDir = path.join(__dirname, '../../front-end/public');

  /* Create http server to serve front-end files.
   */
  const app = express();
  const server = http.createServer(app);

  /* WebSocket server to send inspection data to the front-end.
   */
  const io = new Server<ServerToClientEvents>(server);

  /* Mount express middleware.
   */
  app.use(express.static(publicDir));

  /* Send index.html by default.
   */
  app.get('/', function (req, res) {
    res.render('index.html');
  });

  /* When the client (front-end) makes a WebSocket connection we start to send
   * mocked inspection data to it every 5 seconds.
   */
  io.on('connection', (socket) => {
    setInterval(() => {
      socket.emit('newData', generateRandomInspectionData());
    }, PERIOD_SECONDS * 1000);
  });

  server.listen(PORT);

  console.log('--------------------------------------------------------------');
  console.log('Back-end started. Mode:', app.get('env'));
  console.log('Listening port:', PORT);
  console.log('Please, open a web browser and go to http://localhost:' + PORT);
  console.log(
    'Then, wait ' + PERIOD_SECONDS + ' seconds for the first data push.'
  );
};

runApplication();