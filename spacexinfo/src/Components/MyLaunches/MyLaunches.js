import React, { useState } from 'react'
import './MyLaunches.css';

export default function MyLaunches() {
  // declaring state variable
  const [MyList, setMyList] = useState({})
  let pad;

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
      <div className="m-4 mt-9 text-light text-center row align-items-center mx-auto"><h2 className="m-2">"My Launches" is currently empty</h2></div>
    )
    // else, show the added launchcard in 'MyLaunch' to the user
  } else {
    let newObject = localStorage.getItem("addedLaunchCard");
    let showLaunchCard = (JSON.parse(newObject));

    return (
      <div className="text-muted p-0">
        
        {Object.values(showLaunchCard).map((info, i) => {

          let rocketId = localStorage.getItem(info.rocket);
          let rocketObject = (JSON.parse(rocketId));

          let allLaunchPads = localStorage.getItem('launchpads');
          let launchPadObjects = (JSON.parse(allLaunchPads));


          launchPadObjects.map((launchPad, index) => {
            if (info.launchpad === launchPad.id) {
              return (pad = launchPad.name)
            }
          })

          return (

            // a launchcard is shown when added to the list of 'MyLaunches'
            <div className="card launchCard bg-secondary rounded m-auto mt-4" key={info.id}>
              <div className="card-body launchCard-body row">


                <div className='col-sm-4 mb-3 text-center'>
                  {info.links.patch.small ?
                    <img src={info.links.patch.small} className="w-100 pt-4" alt='spacex mission' />
                    :
                    <img src="https://imgur.com/IJWn9pK.png" className="w-100 pt-4" alt='spacex mission' />
                  }
                  <div className="d-grid gap-2 pt-4 bottom-0 text-center pb-4">
                    <button type="button" className="btn btn-primary rounded-5">Read more</button>
                    <button type="button" className="btn btn-danger rounded-5" onClick={() => deleteLaunch(info.id)} >Delete</button>
                  </div>
                </div>

                <div className='col-sm-4 mb-3 text-center'>
                  <div className='pt-4'>
                    <h5 className="card-title text-dark fs-6 fw-bold">Flight</h5>
                    <h4 className="card-text text-white fs-5  text-white">{info.flight_number}</h4>
                  </div>
                  <div className='pt-4'>
                    <h5 className="card-title text-dark fs-6 fw-bold">Mission name</h5>
                    <h4 className="card-text text-white fs-5 text-white">{info.name}</h4>
                  </div>

                  <div className='pt-4'>
                    <h5 className="card-title text-dark fs-6 fw-bold">Status</h5>
                    {info.upcoming ?
                      <div className='upcoming'>
                        <h4 className="card-text fs-5 text-warning"><span className="badge bg-success">Upcoming</span></h4>
                      </div>
                      :
                      <div className='completed'>
                        <h4 className="card-text fs-5 text-success"><span className="badge bg-warning">Completed</span></h4>
                      </div>
                    }
                  </div>
                </div>
                <div className='col-sm-4 mb-3 text-center'>
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
        }
 
        )}
      </div>
    )
  }
}