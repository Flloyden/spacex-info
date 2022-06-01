import React, { Component } from 'react'
import ApiConnector from '../../ApiConnector/ApiConnector';

export default class Rockets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rockets: null,
        }
    }

    

    /**
     * endpoints can be = all, one, query, schema. docs -> https://github.com/r-spacex/SpaceX-API/tree/master/docs/rockets/v4
     *  Rockets sends endpoint to ApiConnector2
     */
    render() {
        // Returns no visual display if render exist, and saves information to localstorage
        if (this.props.render) {
            return (
                <ApiConnector endpoint={'v4/rockets'} render={'renderRocket'}/>
               
            )
        } else {
            // Returns normal
            return (
               
                <ApiConnector endpoint={'v4/rockets'} />
                
            )
        }
        
    }
}