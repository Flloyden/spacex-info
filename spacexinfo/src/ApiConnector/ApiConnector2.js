import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LaunchCard from '../Components/Launches/LaunchCard';
import RocketCard from '../Components/Rockets/RocketCard';

export default function ApiConnector2(props) {

    // declaring state variable
    const [SpaceXResponse, setLaunchInfo] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.spacexdata.com/v4/${props.endpoint}`)
            .then(function (response) {
                // handle success
                // reversing array
                const arrayReverse = response.data;
                arrayReverse.reverse()
                // saving the array
                setLaunchInfo(arrayReverse);
                console.log(props.endpoint)
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    if (props.endpoint === "launches") {
        return (<LaunchCard launchInfo={SpaceXResponse} />)
    
    } else if (props.endpoint === "rockets") {
        
        return (<RocketCard rocketInfo={SpaceXResponse} />)
    }

    return (
        <div>
            
        </div>
    )

}
