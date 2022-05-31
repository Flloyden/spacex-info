import React, { Component } from 'react';
import ApiConnector from '../../ApiConnector/ApiConnector';
import Rockets from '../Rockets/Rockets';

export default class Mainframe extends Component {

  render() {
      return (
        <div className='launch-info text-center text-white d-flex justify-content-center'>
          <Rockets />
          <ApiConnector endpoint={'v4/launchpads'} />
          <ApiConnector endpoint={'v5/launches/next'} />
        </div>
       
      )
    }
  }