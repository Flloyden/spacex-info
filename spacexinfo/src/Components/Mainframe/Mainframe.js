import React from 'react';
import ApiConnector from '../../ApiConnector/ApiConnector';

export default function Mainframe(props) {

  return (
      <ApiConnector endpoint={'v5/launches/next'} />
  )
}
