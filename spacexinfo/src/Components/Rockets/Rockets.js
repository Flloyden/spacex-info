import React, { Component } from 'react'
import ApiConnector2 from '../../ApiConnector/ApiConnector2';

export default class Rockets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rockets: null,
        }
    }

    /**
     * endpoints can be = all, one, query, schema        docs -> https://github.com/r-spacex/SpaceX-API/tree/master/docs/rockets/v4
     *  Rockets sends endpoint to ApiConnector2
     */
    render() {

        return (
            <div>
                <ApiConnector2 endpoint={'rockets'} />
            </div>
        )
    }
}