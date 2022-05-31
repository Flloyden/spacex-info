import React from 'react'
import Countdown from 'react-countdown';
import './MainframeView.css'

export default function MainframeView(props) {
  // Getting todays date and gets the difference between date of launch in milliseconds
  let todayDate = new Date();
  let todayMill = todayDate.getTime()
  let liftOff = new Date(props.nextLaunch.date_utc);
  let launchMill = liftOff.getTime()
  let diff = launchMill - todayMill;

  return (
    
      <div className='align-self-end launch-text'>
        <h1>Next Launch: {props.nextLaunch.name}</h1>
        <h2><Countdown key={Date.now()} date={Date.now() + diff} /></h2>
        <h6>DD : HH : MM : SS</h6>
      </div>
    
  )
}