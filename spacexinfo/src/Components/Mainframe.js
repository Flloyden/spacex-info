import React from 'react';
import './Mainframe.css';

export default function Mainframe() {
  return (
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
        <h1>Next Lauch: Falcon Heavy</h1>
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
          </div>
        </div>
      </div>
  )
}
