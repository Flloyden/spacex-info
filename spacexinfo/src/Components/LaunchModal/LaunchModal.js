import React from 'react'
import ApiConnector2 from '../../ApiConnector/ApiConnector2'

export default function LaunchModal(props) {

    console.log(props.launch)

    const rock = localStorage.getItem(props.launch.rocket);

    const rocket = JSON.parse(rock);

  return (
      <div>
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <h5 className="modal-title">Flight {props.launch.flight_number}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      {props.launch.name}
                      {rocket.name}
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
  )
}
