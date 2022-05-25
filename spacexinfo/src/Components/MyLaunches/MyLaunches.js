import React from 'react'


export default function MyLaunches() {

  if (localStorage.getItem("addedLaunchCard") === null) {
    return (
      <div>Inget sparat!</div>
    )
  } else {
    let newObject = window.localStorage.getItem("addedLaunchCard");
    let showLaunchCard = (JSON.parse(newObject));

    return (
      <div class="m-4 bg-light"><h2 class="m-2">My Launches</h2>{showLaunchCard.map((info) => {

        return (
          <div className="card" key={info.id}>
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
            <a href="#" className="btn btn-primary">Read more</a>
            <a href="#" className="btn btn-danger">Delete</a>

          </div>

        )
      })}
      </div>








    )

  }





}








