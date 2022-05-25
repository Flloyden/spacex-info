import React from 'react'
import './Navbar.css'

export default function Navbar(props) {

  return (
    <div>
            <button className="navbar-light bg-light rounded"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                <ul>
                </ul>
                </div>
                {props.items.map((list, index) => {
                  return(
                    <li className="items" key={index} onClick={() => {props.changeFrame(list.frame)}}>
                      { list.title }
                    </li>
                  )
                })}
            </div>
            </div>
    </div>
  )
}
