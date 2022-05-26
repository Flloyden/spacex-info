import React from 'react'
import Countdown from 'react-countdown';

export default function MainframeView(props) {


  let todayDate = new Date();

  let todayMill = todayDate.getTime()

  let liftOff = new Date(props.nextLaunch.date_utc);

  let launchMill = liftOff.getTime()


  let diff = launchMill - todayMill;




  return (
      <div className='launch-info text-center text-white d-flex justify-content-center'>
        <div className='align-self-end'>
          <h1>Next Lauch: {props.nextLaunch.name}</h1>
          <h2><Countdown key={Date.now()} date={Date.now() + diff } /></h2>
          <h6>DD : HH : MM : SS</h6>
        </div>
      </div>
  )
}