import React from 'react'
import './MainframeView.css';
import Countdown from 'react-countdown';

export default function MainframeView(props) {


  let todayDate = new Date();

  let todayMill = todayDate.getTime()

  let liftOff = new Date(props.nextLaunch.date_utc);

  let launchMill = liftOff.getTime()


  let diff = launchMill - todayMill;




  return (
    <div>
      <div className='info'>
        <div className='image-container'>
          <div className='logo'>
            <img className='img-fluid' src='./SpaceX-logo.png' alt='SpaceX logo' />
          </div>
          <div className='rocket'>
            <img className='img-fluid' src='./rocket.gif' alt='Moving rocket from JoyPixels' />
          </div>
        </div>
        <div className='launch-info'>
          <h1>Next Lauch: {props.nextLaunch.name}</h1>
          <div className='countdown'>
            <div className='item'>
              <h1>10</h1>
              <h2>Days</h2>
            </div>
            <div className='item'>
              <h1>10</h1>
              <h2>Hours</h2>
            </div>
            <div className='item'>
              <h1>10</h1>
              <h2>Minutes</h2>
            </div>
            <div className='item'>
              <h1>10</h1>
              <h2>Seconds</h2>
            </div>


            <Countdown key={Date.now()} date={Date.now() + diff } />

          </div>
        </div>
      </div>
    </div>
  )
}