import React from 'react'


export default function MyLaunches() {

  if (localStorage.getItem("addedLaunchCard") === null) {
    return (
      <div class="m-4 mt-9 text-muted"><h2 className="m-2">The list of "My Launches" is empty...</h2></div>
    )
  } else {
    let newObject = window.localStorage.getItem("addedLaunchCard");
    let showLaunchCard = (JSON.parse(newObject));

    return (
      <div class="m-4 mt-4 text-muted"><h2 className="mt-2">My Launches</h2>{showLaunchCard.map((info) => {

        return (
          <div className="card rounded-0 bg-secondary col-9 mx-auto mt-3" key={"Launches"+info.id}>
            <div className="card-body">
              <div className='left-side'>
                <img src={info.links.patch.small} alt='spacex mission' />
              </div>

              <div className='right-side'>
                <div className='space-item-info'>
                  <h5 className="card-title">Mission name</h5>
                  <h4 className="card-text">{info.name}</h4>
                </div>

                <div className='space-item-info'>
                  <h5 className="card-title">Flight</h5>
                  <h4 className="card-text">{info.flight_number}</h4>
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

              </div>

            </div>
            <div class="d-grid gap-2 col-3 mx-auto mb-3">
              <button type="button" className="btn btn-primary rounded-0">Launch demo modal</button>
              <button type="button" className="btn btn-danger rounded-0" id onlick >Delete</button>
            
          </div>

          </div>

        )
      })}
      </div>



    )

  }





}








