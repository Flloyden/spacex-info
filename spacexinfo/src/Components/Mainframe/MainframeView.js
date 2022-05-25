import React from 'react'
import './MainframeView.css';
import Countdown from 'react-countdown';
import moment from 'moment'

export default function MainframeView(props) {

    let todayDate = moment(new Date());
    let liftOff = moment(props.nextLaunch.date_utc);
    let diff = liftOff.diff(todayDate);
    let timeLeft = moment.utc(diff).format('x');

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
            <Countdown date={Date.now() + parseInt(timeLeft)} />
          </div>
        </div>
      </div>
    </div>
  )
}
