import React, { useState } from 'react'
import './MyLaunches.css';

export default function MyLaunches() {
  // declaring state variable
  const [setMyList] = useState({})

  function deleteLaunch(id) {
    /**
     * A function for deleting launch from 'MyLaunch' and from localstorage
     */
    // We find the launchcard from localstorage
    let delObject = localStorage.getItem("addedLaunchCard");
    let launCardObject = (JSON.parse(delObject));
    delete launCardObject[id]

    if (launCardObject && Object.keys(launCardObject).length === 0
      && Object.getPrototypeOf(launCardObject) === Object.prototype) {
      localStorage.removeItem('addedLaunchCard');
      setMyList({})
    } else {
      // if not removing, we set the launchcard in 'addedLaunchCard'
      localStorage.setItem("addedLaunchCard", JSON.stringify(launCardObject));
      setMyList(launCardObject)
    }
  }

  // if list of myLaunches is empty, return a message to the user
  if (localStorage.getItem("addedLaunchCard") === null) {
    return (
      <div className="m-4 mt-9 text-light"><h2 className="m-2">The list of "My Launches" is empty...</h2></div>
    )
    // else, show the added launchcard in 'MyLaunch' to the user
  } else {
    let newObject = localStorage.getItem("addedLaunchCard");
    let showLaunchCard = (JSON.parse(newObject));
    return (
      <div className="text-muted text-center">
        {Object.values(showLaunchCard).map((info, i) => (
          // a launchcard is shown when added to the list of 'MyLaunches'
          <div className="row">
            <div className="card rounded-0 bg-secondary" key={"Launches" + info.id}>
              <div className="card-body">
                <div className='col-sm-2 col-sm-offset-5 text-center'>
                  <img src={info.links.patch.small} className="img-thumbnail" alt='spacex mission' />
                </div>
                <div className='right-side'>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title">Mission name</h5>
                    <h4 className="card-text">{info.name}</h4>
                  </div>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title p-1">Flight</h5>
                    <h4 className="card-text">{info.flight_number}</h4>
                  </div>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title">Status</h5>
                    <h4 className="card-text">{info.upcoming ? 'Upcoming' : 'Completed'}</h4>
                  </div>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title">Time</h5>
                    <h4 className="card-text">{info.date_local}</h4>
                  </div>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title">Launchpad</h5>
                    <h4 className="card-text">{info.launchpad}</h4>
                  </div>
                  <div className='space-item-info p-1'>
                    <h5 className="card-title">Rocket</h5>
                    <h4 className="card-text">{info.rocket}</h4>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="button" className="btn btn-primary rounded-0">Launch demo modal</button>
                <button type="button" className="btn btn-danger rounded-0" onClick={() => deleteLaunch(info.id)} >Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}