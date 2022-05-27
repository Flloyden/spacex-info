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
                            <div className="row">
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
                            <div className="card launchCard bg-secondary rounded m-auto mt-4" key={info.id}>
                                <div className="card-body launchCard-body row">
                                    <div className='left-side col-4 text-center'>
                                        <img src={launchPatch} className="LaunchPicture pt-4 w-100" alt='spacex mission' />
                                        <div className="d-grid gap-2 pt-4 bottom-0 text-center pb-4">
                                            <button type="button"className="btn btn-info" id={index} onClick={addToLocalStorage}>Add to "My Launches"</button>
                                            <button type="button" className="btn btn-primary" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">Read more</button>
                                        </div>
                                    </div>
                                    <div className='right-side col-8 d-flex flex-wrap align-items-start mb-3'>
                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Flight</h5>
                                            <h4 className="card-text text-white fs-5">{info.flight_number}</h4>
                                        </div>
                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Mission name</h5>
                                            <h4 className="card-text text-white fs-5">{info.name}</h4>
                                        </div>

                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Status</h5>
                                            {info.upcoming ? 
                                            <div className='upcoming'>
                                                <h4 className="card-text fs-5 text-warning">Upcoming</h4>
                                            </div>
                                            : 
                                            <div className='completed'>
                                                <h4 className="card-text fs-5 text-success">Completed</h4>
                                            </div>
                                            }
                                            
                                        </div>

                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Time</h5>
                                            <h4 className="card-text text-white fs-5">{new Date(info.date_local).toLocaleDateString("sv-SE")}</h4>
                                        </div>

                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Launchpad</h5>
                                            {props.launchPad.map((test, index) => {
                                                return (
                                                    <div className='launch-pad' key={index}>
                                                        {info.launchpad === test.id ? 
                                                        <h4 className="card-text text-white fs-5">{test.name}</h4>
                                                        :
                                                        <p></p>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className='space-item-info pt-4 w-50'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Rocket</h5>
                                            {props.rocketName.map((details, index) => {
                                                return (
                                                    <div className='rocket-name' key={index}>
                                                        {info.rocket === details.id ? 
                                                        <h4 className="card-text text-white fs-5">{details.name}</h4>
                                                        :
                                                        <p></p>
                                                        }
                                                    </div>
                                                )
                                            })}
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
