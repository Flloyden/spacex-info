import React from 'react'
import './LaunchCard.css'

export default function LaunchCard() {
  return (
    <div>
        <div className="card">
            <div className="card-body">
                <div className='left-side'>
                    <img src='https://images2.imgbox.com/53/22/dh0XSLXO_o.png' alt='spacex mission' />
                </div>
                <div className='right-side'>
                    <div className='space-item-info'>
                        <h5 className="card-title">Flight</h5>
                        <h4 className="card-text">190</h4>
                    </div>
                    <div className='space-item-info'>
                        <h5 className="card-title">Mission name</h5>
                        <h4 className="card-text">USSF-44</h4>
                    </div>

                    <div className='space-item-info'>
                        <h5 className="card-title">Status</h5>
                        <h4 className="card-text">Upcomming</h4>
                    </div>

                    <div className='space-item-info'>
                        <h5 className="card-title">Time</h5>
                        <h4 className="card-text">Dec 2022</h4>
                    </div>
                    
                    <div className='space-item-info'>
                        <h5 className="card-title">Launchpad</h5>
                        <h4 className="card-text">KSC LC 39A</h4>
                    </div>
                    
                    <div className='space-item-info'>
                        <h5 className="card-title">Rocket</h5>
                        <h4 className="card-text">Falcon 9</h4>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}
