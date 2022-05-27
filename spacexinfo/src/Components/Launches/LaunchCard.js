import React, { useState } from 'react'
import './LaunchCard.css'
import LaunchModal from '../LaunchModal/LaunchModal'

export default function LaunchCard(props) {

    // declaring state variable
    const [list, setList] = useState([])
    let something;

    const [thisRocket, setthisRocket] = useState({
        name: '',
        rocket: "5e9d0d95eda69973a809d1ec",
        flight_number: ""
    })

    function sendData(e) {

        let thisUniqueRocket = props.launchInfo[e.target.id]

        setthisRocket({
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

    /*
    function deleteMyLaunchCard(id) {
        const remove = (id) => {
            let filteredArr = list.filter((el) => el !== id);
            setItems(filteredArr);
       
         } 
    }

    */


    return (
        <div>
            <div className="row">
                <div className="col text-center">

                    <button type="button" className="mt-5 pr-3 btn btn-warning rounded-0" onClick={sortListUpcoming}>Upcoming</button>
                     <button type="button" className="mt-5 pl-3 btn btn-success rounded-0" onClick={sortListCompleted}>Completed</button>

                </div>
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
                                <div className="card launchCard" key={info.id}>
                                    <div className="card-body launchCard-body">
                                        <div className='left-side'>
                                            <img src={launchPatch} alt='spacex mission' />
                                        </div>
                                        <div className='right-side'>
                                            <div className='space-item-info'>
                                                <h5 className="card-title">Flight</h5>
                                                <h4 className="card-text">{info.flight_number}</h4>
                                            </div>
                                            <div className='space-item-info'>
                                                <h5 className="card-title">Mission name</h5>
                                                <h4 className="card-text">{info.name}</h4>
                                            </div>

                                            <div className='space-item-info'>
                                                <h5 className="card-title">Status</h5>
                                                <h4 className="card-text">{info.upcoming ? 'Upcoming'  : 'Completed'}</h4>
                                            </div>

                                            <div className='space-item-info'>
                                                <h5 className="card-title">Time</h5>
                                                <h4 className="card-text">{info.date_local}</h4>
                                            </div>

                                            <div className='space-item-info'>
                                                <h5 className="card-title">Launchpad</h5>
                                                <h4 className="card-text">{info.launchpad}</h4>
                                            </div>

                                            <div className='space-item-info'>
                                                <h5 className="card-title">Rocket</h5>
                                                <h4 className="card-text">{info.rocket}</h4>

                                            </div>

                                            <div className="d-grid gap-2 col-6 mx-auto">

                                                <button type="button"className="btn btn-info bg-gradient  rounded-0 p-9" id={index} onClick={addToLocalStorage}>Add to "My Launches"</button>
                                                <button type="button" className="btn btn-primary rounded-0 p-9" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Read more
                                                </button>
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
                                        <img src={launchPatch} alt='spacex mission' />
                                    </div>
                                    <div className='right-side'>
                                        <div className='space-item-info'>
                                            <h5 className="card-title">Flight</h5>
                                            <h4 className="card-text">{info.flight_number}</h4>
                                        </div>
                                        <div className='space-item-info'>
                                            <h5 className="card-title">Mission name</h5>
                                            <h4 className="card-text">{info.name}</h4>
                                        </div>

                                        <div className='space-item-info'>
                                            <h5 className="card-title">Status</h5>
                                            <h4 className="card-text">{info.upcoming ? 'Upcoming' : 'Completed'}</h4>
                                            
                                        </div>

                                        <div className='space-item-info'>
                                            <h5 className="card-title">Time</h5>
                                            <h4 className="card-text">{info.date_local}</h4>
                                        </div>

                                        <div className='space-item-info'>
                                            <h5 className="card-title">Launchpad</h5>
                                            <h4 className="card-text">{info.launchpad}</h4>
                                        </div>

                                        <div className='space-item-info'>
                                            <h5 className="card-title">Rocket</h5>
                                            <h4 className="card-text">{info.rocket}</h4>
                                        </div>


                                        <div className="d-grid gap-2 col-6 mx-auto">
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
