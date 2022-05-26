import React, {useState} from 'react'


export default function MyLaunches() {


  const [myList, setmyList] = useState({})


  function deleteLaunch(id) {
    console.log(id)
    let delObject = localStorage.getItem("addedLaunchCard");
    let launCardObject= (JSON.parse(delObject));
    console.log(launCardObject[id])
    delete launCardObject[id]
    console.log(launCardObject)
    

    if (launCardObject && Object.keys(launCardObject).length === 0
      && Object.getPrototypeOf(launCardObject) === Object.prototype) {
      localStorage.removeItem('addedLaunchCard');
      setmyList({})
    } else {
      localStorage.setItem("addedLaunchCard", JSON.stringify(launCardObject));
      setmyList(launCardObject)
    }
    
    
  }


  if (localStorage.getItem("addedLaunchCard") === null) {
    return (
      <div className="m-4 mt-9 text-light"><h2 className="m-2">The list of "My Launches" is empty...</h2></div>
    )
  } else {
    let newObject = localStorage.getItem("addedLaunchCard");
    let showLaunchCard = (JSON.parse(newObject));
    return (
      <div class="m-4 mt-4 text-muted text-center">
        
        {
          Object.values(showLaunchCard).map((info, i) => (
            
            <div className="card rounded-0 bg-secondary col-9 mx-auto mt-3" key={"Launches" + info.id}>
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
              <div className="d-grid gap-2 col-3 mx-auto mb-3">
                <button type="button" className="btn btn-primary rounded-0">Launch demo modal</button>
                <button type="button" className="btn btn-danger rounded-0" onClick={() => deleteLaunch(info.id)} >Delete</button>

              </div>

            </div>
          ))
        }
      </div>



    )

  }





}








