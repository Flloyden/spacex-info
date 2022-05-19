import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ApiConnector() {

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.spacexdata.com/v4/launches/latest')
            .then(function (response) {
                // handle success
                console.log(response);
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div>Api</div>
    )
}
