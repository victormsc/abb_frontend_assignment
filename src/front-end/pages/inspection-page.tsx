//------------------------------------------------------------------------------
/**
 */

'use strict';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import InspectionPanel from '../components/InspectionPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/stylesheet.css';
import 'react-grid-layout/css/styles.css';
import '../stylesheets/modificacion-react-grid-item.css';
import { io, Socket } from 'socket.io-client';
import { InspectionData } from '../types';

interface ServerToClientEvents {
  newData: any;
}

/* WebSocket to receive inspection data from server.
 */
const socket: Socket<ServerToClientEvents> = io();

const InspectionPage = () => {
  /* inspectionData stores all the data received from server.
   */
  const [inspectionData, setinspectionData] = useState<InspectionData>([]);

  /* We update the inspectionData state when a "newData" message arrives from
   * the server. This triggers the update of the panels.
   *
   *****************************************************************************
   * I am aware that a single change to one of the data can cause the entire
   * interface to be re-rendered, which is not efficient. Ideally, changing one
   * of the data items should cause only the node associated with it to be
   * re-rendered.
   *****************************************************************************
   */
  socket.on('newData', function (data) {
    setinspectionData(data);
  });

  return (
    <div className='app'>
      <InspectionPanel inspectionData={inspectionData} />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<InspectionPage />);
