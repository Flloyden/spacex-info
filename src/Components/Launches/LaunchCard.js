import React, { useState, useEffect } from 'react'
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

    // Variable to save the name about a launchpad
    let pad;

    function sendData(e) {
        /**
         * Sends correct data to the modal
         */
        let thisUniqueRocket = props.launchInfo[e.target.id]
        setThisRocket({
            name: thisUniqueRocket.name,
            rocket: thisUniqueRocket.rocket,
            flight_number: thisUniqueRocket.flight_number
        })
    }

    function sortList(param) {
        /**
         * Checking what button is pressed and sorts the list and returns it
         */
        const array = [];
        if (param === "Completed") {
            props.launchInfo.map((info) => {
                // check the state of launches
                if (info.upcoming === false) {
                    array.push(info)
                }
                return (null)
            })
            // Setting the list
            setList(array)

        } else if (param === "Upcoming") {
            props.launchInfo.map((info) => {
                // check the state of launches
                if (info.upcoming === true) {
                    array.push(info)
                }
                return (null)
            })
            // Reversing the array and sets the list
            array.reverse()
            setList(array)
        }
    }

    function addToLocalStorage(thisLaunchId) {
        /**
         * Adds a launchcard to localstorage
         */

        // Checks the list and get the object with right id from button
        let saveThis = props.launchInfo.filter((item) => item.id === thisLaunchId)
      
        // Creates a new object if addedLaunchCard does not exist in localstorage
        if (localStorage.getItem("addedLaunchCard") === null) {
            let myNewLaunchList = {}
            myNewLaunchList[saveThis[0].id] = saveThis
            localStorage.setItem("addedLaunchCard", JSON.stringify(myNewLaunchList));
        }
        // If object exist in localstorage it does nothing
        else {
            let saveMyLaunchList = JSON.parse(localStorage.getItem("addedLaunchCard"));
            // Already saved to list
            if (saveThis[0].id in saveMyLaunchList) {
            } else {
                // Adds object to list in localstorage
                saveMyLaunchList[saveThis[0].id] = saveThis
                localStorage.setItem("addedLaunchCard", JSON.stringify(saveMyLaunchList));
            }
        }

         /**
         * when launchCard is added to "My Launchcard",
         * change the text color and background color of button 
         */
        let added = document.getElementById(`addThis${thisLaunchId}`)
        added.innerHTML = 'Added'
        added.style.color = 'white'
        added.parentElement.style.backgroundColor = "red";
    }


    useEffect(() => {
        /**
         * Checks if the card exist in localstorage list and makes the "Add to my list" button red
         * Testing to add if html is loaded else it caches the error
         */
        try {
            let myList = localStorage.getItem("addedLaunchCard")
            let myObjects = JSON.parse(myList)

            Object.values(myObjects).map((info, i) => {

                try {
                    let added = document.getElementById(`addThis${info[0].id}`)
                    added.innerHTML = 'Added'
                    added.style.color = 'white'
                    added.parentElement.style.backgroundColor = "red";
                     /**
                     * when launchCard is added to "My Launchcard",
                     * change the text color and background color of button 
                     */
                } catch (error) {

                }

                return (null)

            })
        } catch (error) {

        }
        
    });

    return (
        <div>
            <div className="row">
                <div className="col text-center">
                    <button type="button" className="mt-5 m-1 btn btn-warning rounded-5" onClick={() => sortList('Upcoming')}>Upcoming</button>
                    <button type="button" className="mt-5 m-1 btn btn-success rounded-5" onClick={() => sortList('Completed')}>Completed</button>
                </div>
            </div>

            {/* 
            start-page is set to upcoming launches by default
        */}
            {JSON.stringify(list) !== '[]' ?
                <>
                    {list.map((info, index) => {

                        // gets the information about a rocket from localstorage
                        let rocketId = localStorage.getItem(info.rocket);
                        let rocketObject = (JSON.parse(rocketId));

                        // gets the information about a launchpad from localstorage
                        let allLaunchPads = localStorage.getItem('launchpads');
                        let launchPadObjects = (JSON.parse(allLaunchPads));

                        // Maps launchpad from api-call against localstorage and returns the name instead of id
                        launchPadObjects.map((launchPad, index) => {
                            if (info.launchpad === launchPad.id) {
                                pad = launchPad.name
                            }
                            return (null)
                            })

                        // Checks if the image is null and replace it with a default image
                        let launchPatch;
                        if (info.links.patch.small === null) {
                            launchPatch = "https://imgur.com/IJWn9pK.png"
                        } else {
                            launchPatch = info.links.patch.small
                        }
                        return (
                            <div className="card launchCard bg-secondary rounded m-auto mt-4" key={info.id}>

                                <div className="card-body launchCard-body row">

                                    <div className='col-sm-4 text-center'>
                                        <img src={launchPatch} className="LaunchPicture pt-4 w-100" alt='SpaceX mission' />
                                        <div className="d-grid gap-2 pt-4 bottom-0 text-center pb-4">
                                            <button type="button" className="btn btn-info" onClick={() => addToLocalStorage(info.id)}><span id={"addThis"+info.id}>Add to "My Launches"</span></button>
                                            <button type="button" className="btn btn-primary" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">Read more</button>
                                        </div>
                                    </div>


                                    <div className='col-sm-4  text-center'>
                                        <div className='pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Flight</h5>
                                            <h4 className="card-text text-white fs-5">{info.flight_number}</h4>
                                        </div>
                                        <div className='pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Mission name</h5>
                                            <h4 className="card-text text-white fs-5">{info.name}</h4>
                                        </div>

                                        <div className='pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Status</h5>
                                            {info.upcoming ?
                                                <div className='upcoming'>
                                                    <h4 className="card-text fs-5 text-warning"><span className="badge bg-warning">Upcoming</span></h4>
                                                </div>
                                                :
                                                <div className='completed'>
                                                    <h4 className="card-text fs-5 text-success"><span className="badge bg-success">Completed</span></h4>
                                                </div>
                                            }
                                        </div>
                                    </div>


                                    <div className='col-sm-4  text-center'>
                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Time</h5>
                                            <h4 className="card-text text-white fs-5">{new Date(info.date_local).toLocaleDateString("sv-SE")}</h4>
                                        </div>

                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Launchpad</h5>
                                            <h4 className="card-text text-white fs-5">{pad}</h4>
                                        </div>

                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Rocket</h5>
                                            <h4 className="card-text text-white fs-5">{rocketObject.name}</h4>
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
                        // gets the information about a rocket from localstorage
                        let rocketId = localStorage.getItem(info.rocket);
                        let rocketObject = (JSON.parse(rocketId));

                        // gets the information about a launchpad from localstorage
                        let allLaunchPads = localStorage.getItem('launchpads');
                        let launchPadObjects = (JSON.parse(allLaunchPads));

                        // Maps launchpad from api-call against localstorage and returns the name instead of id
                        launchPadObjects.map((launchPad, index) => {
                            if (info.launchpad === launchPad.id) {
                                pad = launchPad.name
                            }
                            return (null)
                        })

                        // Checks if the image is null and replace it with a default image
                        let launchPatch;
                        if (info.links.patch.small === null) {
                            launchPatch = "https://imgur.com/IJWn9pK.png"
                        } else {
                            launchPatch = info.links.patch.small
                        }
                        return (
                            <div className="card launchCard bg-secondary rounded m-auto mt-4" key={info.id}>
                                <div className="card-body launchCard-body row">


                                    <div className='col-sm-4  text-center'>
                                        <img src={launchPatch} className="LaunchPicture pt-4 w-100" alt='spacex mission' />
                                        <div className="d-grid gap-2 pt-4 bottom-0 text-center pb-4">
                                            <button type="button" className="btn btn-info" onClick={() => addToLocalStorage(info.id)}><span id={"addThis" + info.id}>Add to "My Launches"</span></button>
                                            <button type="button" className="btn btn-primary" id={index} onClick={sendData} data-bs-toggle="modal" data-bs-target="#exampleModal">Read more</button>
                                        </div>
                                    </div>


                                    <div className='col-sm-4  text-center'>
                                        <div className='space-item-info pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Flight</h5>
                                            <h4 className="card-text text-white fs-5">{info.flight_number}</h4>
                                        </div>
                                        <div className='space-item-info pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Mission name</h5>
                                            <h4 className="card-text text-white fs-5">{info.name}</h4>
                                        </div>

                                        <div className='space-item-info pt-4'>
                                            <h5 className="card-title text-black-25 fs-6 fw-bold">Status</h5>
                                            {info.upcoming ?
                                                <div className='upcoming'>
                                                    <h4 className="card-text fs-5 text-warning"><span className="badge bg-warning">Upcoming</span></h4>
                                                </div>
                                                :
                                                <div className='completed'>
                                                    <h4 className="card-text fs-5 text-success"><span className="badge bg-success">Completed</span></h4>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='col-sm-4  text-center'>
                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Time</h5>
                                            <h4 className="card-text text-white fs-5">{new Date(info.date_local).toLocaleDateString("sv-SE")}</h4>
                                        </div>

                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Launchpad</h5>
                                            <h4 className="card-text text-white fs-5">{pad}</h4>
                                        </div>

                                        <div className='pt-4'>
                                            <h5 className="card-title text-dark fs-6 fw-bold">Rocket</h5>
                                            <h4 className="card-text text-white fs-5">{rocketObject.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
            <div className="modal" id="exampleModal">
                <LaunchModal launch={thisRocket} />
            </div>
        </div>
    )
}
