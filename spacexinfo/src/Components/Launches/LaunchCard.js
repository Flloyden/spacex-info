import React, { useState } from 'react'
import './LaunchCard.css'
import LaunchModal from '../LaunchModal/LaunchModal'

export default function LaunchCard(props) {

    // declaring state variable
    const [list, setList] = useState([])

    const [thisRocket, setThisRocket] = useState({
        name: '',
        rocket: "5e9d0d95eda69973a809d1ec",
        flight_number: ""
    })

    function sendData(e) {

        let thisUniqueRocket = props.launchInfo[e.target.id]

        setThisRocket({
            name: thisUniqueRocket.name,
            rocket: thisUniqueRocket.rocket,
            flight_number: thisUniqueRocket.flight_number
        })
    }

    /**
     * 
     * Dessa funktioner är typ identiska, en if/else är nog bättre
     * 
     * I button kan vi bara kalla onClick={sortListUpcoming(uppcomming/completed)} och använda parameter för att bestämma vilken vi vill ha
     */


    function sortListUpcoming(event) {
        /* 
        Sorting the list by upcoming launches
        */
        const array = []
        props.launchInfo.map((info) => {
            // check the state of launches
            if (info.upcoming === true) {
                return (
                    array.push(info)
                )
            }
        })
        setList(array)
    }

    function sortListCompleted(event) {
        /*
        Sorting the list by completed launches
        */
        const array = []
        props.launchInfo.map((info) => {
            // check the state of launches
            if (info.upcoming === false) {
                return (
                    array.push(info)
                )
            }
        })
        setList(array)
    }

    function addToLocalStorage(e) {
        if (localStorage.getItem("addedLaunchCard") === null) {
            let myNewLaunchList = {}
            myNewLaunchList[props.launchInfo[e.target.id].id] = props.launchInfo[e.target.id]
            localStorage.setItem("addedLaunchCard", JSON.stringify(myNewLaunchList));

        }
        else {
            let saveMyLaunchList = JSON.parse(localStorage.getItem("addedLaunchCard"));
            if (props.launchInfo[e.target.id].id in saveMyLaunchList) {
                // Already saved to list
            } else {
                saveMyLaunchList[props.launchInfo[e.target.id].id] = props.launchInfo[e.target.id]
                localStorage.setItem("addedLaunchCard", JSON.stringify(saveMyLaunchList));
            }
            
        }
    
        

        
    }
    return (
        <div>
            <div className="row">
                <div className="col text-center">

                    <button type="button" className="mt-5 m-1 btn btn-warning rounded-5" onClick={sortListUpcoming}>Upcoming</button>
                     <button type="button" className="mt-5 m-1 btn btn-success rounded-5" onClick={sortListCompleted}>Completed</button>

                </div>
            </div>

        <div>
           
        </div>    

            {/* 
            start-page is set to upcoming launches by default
        */}
            {JSON.stringify(list) !== '[]' ?
                <>
                    {list.map((info, index) => {
                        let launchPatch;
                        if (info.links.patch.small === null) {
                            launchPatch = "https://imgur.com/IJWn9pK.png"
                        } else {
                            launchPatch = info.links.patch.small
                        }
                        return (
                            <div class="row">
                                <div className="card launchCard" key={info.id}>
                                    <div className="card-body launchCard-body">
                                        <div className='left-side'>
                                            <img src={launchPatch} className="LaunchPicture" alt='spacex mission' />
                                        </div>
                                        <div className='right-side'>
                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Flight</h5>
                                                <h4 className="card-text">{info.flight_number}</h4>
                                            </div>
                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Mission name</h5>
                                                <h4 className="card-text">{info.name}</h4>
                                            </div>

                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Status</h5>
                                                <h4 className="card-text">{info.upcoming ? 'Upcoming'  : 'Completed'}</h4>
                                            </div>

                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Time</h5>
                                                <h4 className="card-text">{info.date_local}</h4>
                                            </div>

                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Launchpad</h5>
                                                <h4 className="card-text">{info.launchpad}</h4>
                                            </div>

                                            <div className='space-item-info m-2'>
                                                <h5 className="card-title">Rocket</h5>
                                                <h4 className="card-text">{info.rocket}</h4>

                                            </div>


                                            <div className="d-grid gap-2 col-6 mx-auto mt-4">
                                                <button type="button"className="btn btn-info bg-gradient  rounded-0 p-9" id={index} onClick={addToLocalStorage}>Add to "My Launches"</button>
                                                <button type="button" className="btn btn-primary rounded-0 p-9" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Read more
                                                </button>
                                            </div>

                                           
                                        </div>
                                        
                                     </div>
                                </div>
                            </div>
                            
                        )
                    })}
                </>

                // else, showing the sorted list based on the sort function
                :
                <>
                    {props.launchInfo.map((info, index) => {
                        let launchPatch;
                        if (info.links.patch.small === null) {
                            launchPatch = "https://imgur.com/IJWn9pK.png"
                        } else {
                            launchPatch = info.links.patch.small
                        }
                        return ( 

                            <div className="card launchCard" key={info.id}>
                                <div className="card-body launchCard-body">
                                    <div className='left-side'>
                                        <img src={launchPatch} className="LaunchPicture" alt='spacex mission' />
                                    </div>
                                    <div className='right-side'>
                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Flight</h5>
                                            <h4 className="card-text">{info.flight_number}</h4>
                                        </div>
                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Mission name</h5>
                                            <h4 className="card-text">{info.name}</h4>
                                        </div>

                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Status</h5>
                                            {info.upcoming ? 
                                            <div className='upcoming'>
                                                <h4 className="card-text">Upcoming</h4>
                                            </div>
                                            : 
                                            <div className='completed'>
                                                <h4 className="card-text">Completed</h4>
                                            </div>
                                            }
                                            
                                        </div>

                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Time</h5>
                                            <h4 className="card-text">{new Date(info.date_local).toLocaleDateString("sv-SE")}</h4>
                                        </div>

                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Launchpad</h5>
                                            {props.launchPad.map((test, index) => {
                                                return (
                                                    <div className='launch-pad' key={index}>
                                                        {info.launchpad === test.id ? 
                                                        <h4 className="card-text">{test.name}</h4>
                                                        :
                                                        <p></p>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className='space-item-info m-1'>
                                            <h5 className="card-title">Rocket</h5>
                                            {props.rocketName.map((details, index) => {
                                                return (
                                                    <div className='rocket-name' key={index}>
                                                        {info.rocket === details.id ? 
                                                        <h4 className="card-text">{details.name}</h4>
                                                        :
                                                        <p></p>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>


                                        <div className="d-grid gap-2 col-6 mx-auto mt-4">
                                            <button type="button"className="btn btn-info rounded-0" id={index} onClick={addToLocalStorage}>Add to "My Launches"</button>
                                            <button type="button" className="btn btn-primary rounded-0" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    
                                             Read more
                                            </button>
                                        </div>
                                    </div>          
                                </div>
                             </div> 
                             
                             
                        )
                    })}
                </>
            }

            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <LaunchModal launch={thisRocket} />
            </div>
            
        </div>
    )
}
