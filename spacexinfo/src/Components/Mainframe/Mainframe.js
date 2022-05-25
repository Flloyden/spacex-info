import React from 'react';
import ApiConnector2 from '../../ApiConnector/ApiConnector2';

export default function Mainframe(props) {

  return (
    <div>
      <ApiConnector2 endpoint={'v5/launches/next'} />
    </div>
  )
}
