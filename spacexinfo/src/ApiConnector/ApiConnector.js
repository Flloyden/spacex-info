import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LaunchCard from '../Components/Launches/LaunchCard'

export default function ApiConnector() {

    // declaring state variable
    const [launchInfo, setLaunchInfo] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.spacexdata.com/v5/launches')
            .then(function (response) {
                // handle success
                // reversing array
                const arrayReverse = response.data;
                arrayReverse.reverse()
                // saving the array
                setLaunchInfo(arrayReverse);
            })

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
           {/* 
            Passing data to LaunchCard
           */}
            <LaunchCard launchInfo={launchInfo} />
        </div>
    )
    
}
