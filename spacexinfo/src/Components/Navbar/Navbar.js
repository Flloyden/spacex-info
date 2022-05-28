import React from 'react'
import './Navbar.css'

export default function Navbar(props) {

  return (
    <div className='nav-canvas'>
      <button className="navbar-toggler navbar-dark bg-transparent p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon fs-1"></span>
      </button>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul>
            {props.items.map((list, index) => {
              return (
                <li className="items" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" key={index} onClick={() => { props.changeFrame(list.frame) }}>
                  {list.title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}