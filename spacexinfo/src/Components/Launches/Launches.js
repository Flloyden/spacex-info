import React, { Component } from 'react'
import ApiConnector from '../../ApiConnector/ApiConnector';

export default class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: null,
    }
  }

  /**
     * endpoints can be = all, latest, next, one, past, query, schema, upcomming      docs -> https://github.com/r-spacex/SpaceX-API/tree/master/docs/launches
     *  Launches sends endpoint to ApiConnector2
     */
  render() {



    return (
      <div>
        <ApiConnector endpoint={'v4/launches'} />
      </div>
    )
  }
}