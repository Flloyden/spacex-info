import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LaunchCard from '../Components/Launches/LaunchCard';
import RocketCard from '../Components/Rockets/RocketCard';
import MainframeView from '../Components/Mainframe/MainframeView';


export default function ApiConnector(props) {
    // declaring state variable
    const [SpaceXResponse, setLaunchInfo] = useState([]);
    const [SpaceXRockets, setSpaceXRockets] = useState([]);
    const [launchPadInfo, setLaunchPadInfo] = useState([]);

    // Initial request
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.spacexdata.com/v4/rockets`)
            .then(function (response) {
                // handle success
                setSpaceXRockets(response.data)
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    // Initial request
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.spacexdata.com/v4/launchpads`)
            .then(function (response) {
                // handle success
                setLaunchPadInfo(response.data)
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

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
    }, []);

    // Checking the endpoint and returning the correct data from the API-call
    if (props.endpoint === "v4/launches") {
        return (<LaunchCard launchInfo={SpaceXResponse} rocketName={SpaceXRockets} launchPad={launchPadInfo} />)
    } else if (props.endpoint === "v4/rockets") {
        for (let i = 0; i < SpaceXResponse.length; i++) {
            localStorage.setItem(SpaceXResponse[i].id, JSON.stringify(SpaceXResponse[i]));
        }
        return (<RocketCard rocketInfo={SpaceXResponse} />)
    } else if (props.endpoint === 'v5/launches/next') {
        return (<MainframeView nextLaunch={SpaceXResponse} />)
    }

    return (
        <div></div>
    )
}