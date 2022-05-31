import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LaunchCard from '../Components/Launches/LaunchCard';
import RocketCard from '../Components/Rockets/RocketCard';
import MainframeView from '../Components/Mainframe/MainframeView';


export default function ApiConnector(props) {
    // declaring state variable
    const [SpaceXResponse, setLaunchInfo] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.spacexdata.com/${props.endpoint}`)
            .then(function (response) {
                // handle success
                // reversing array
                if (response.data.length > 1) {
                    const arrayReverse = response.data;
                    arrayReverse.reverse()
                    // saving the array
                    setLaunchInfo(arrayReverse);
                } else {
                    setLaunchInfo(response.data);
                }
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [props.endpoint]);

    // Checking the endpoint and returning the correct data from the API-call
    if (props.endpoint === "v4/launches") {
        return (<LaunchCard launchInfo={SpaceXResponse} /*rocketName={SpaceXRockets} launchPad={launchPadInfo} */ />)
    } else if (props.endpoint === "v4/rockets") {
        for (let i = 0; i < SpaceXResponse.length; i++) {
            localStorage.setItem(SpaceXResponse[i].id, JSON.stringify(SpaceXResponse[i]));
        }
        if (props.render) {
            return (<RocketCard rocketInfo={SpaceXResponse} />)
        } else {

        }
        
    } else if (props.endpoint === 'v5/launches/next') {
        return (<MainframeView nextLaunch={SpaceXResponse} />)
    } else if (props.endpoint === 'v4/launchpads') {
        localStorage.setItem("launchpads", JSON.stringify(SpaceXResponse));
    }
}