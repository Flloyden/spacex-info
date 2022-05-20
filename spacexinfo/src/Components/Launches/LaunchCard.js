import React, { useState } from 'react'
import './LaunchCard.css'

export default function LaunchCard(props) {

    // declaring state variable
    const [list, setList] = useState([])

    function sortListUpcoming(event) {
        /* 
        Sorting the list by upcoming launches
        */
        const array = []
        props.launchInfo.map((info) => {
            // check the state of launches
            if(info.upcoming === true){
                return(
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
            if(info.upcoming === false){
                return(
                    array.push(info)   
                )
            }
        })
        setList(array)
    }

  return (
    <div>
        <button type="button" className="btn btn-secondary" onClick={sortListUpcoming}>Upcomning</button>
        <button type="button" className="btn btn-success" onClick={sortListCompleted}>Completed</button>

        {/* 
            start-page is set to upcoming launches by default
        */}
        {JSON.stringify(list) !== '[]' ?
        <>
         {list.map((info) => {
                        return (
                            <div className="card" key={info.id}>
                                <div className="card-body">
                                    <div className='left-side'>
                                        <img src={info.links.patch.small} alt='spacex mission'  />
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
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary">Read more</a>
                            </div>
                        )
                    })}
        </>
        
        // else, showing the sorted list based on the sort function
        : 
        <>
         {props.launchInfo.map((info) => {
                        return (
                            <div className="card" key={info.id}>
                                <div className="card-body">
                                    <div className='left-side'>
                                        <img src={info.links.patch.small} alt='spacex mission'  />
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
                                    </div>
                                </div>
                                <a href="#" className="btn btn-primary">Read more</a>
                            </div>
                        )
                    })}
        </>
    }
    </div>
  )
}
