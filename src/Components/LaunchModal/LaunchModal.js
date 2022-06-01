import React from 'react'

export default function LaunchModal(props) {
    // Gets information from localstorage
    const rock = localStorage.getItem(props.launch.rocket);
    const rocket = JSON.parse(rock);

    return (
            <div className="modal-dialog modal-lg">
                <div className="modal-content modalBackground">
                    <div className="modal-header">
                        <h5 className="modal-title text-light">Flight: {props.launch.flight_number}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="card mb-3 rocket-card m-auto">
                        <img src={rocket.flickr_images} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className="card-title text-light">{rocket.name}</h3>
                            <p className="card-text text-light">{rocket.description}</p>
                            <div className="col">
                                <h6 className="text-light">Specs</h6>
                            </div>
                        </div>
                    </div>
                <div className="modal-body table-responsive">
                        <table className="table table-dark table-striped rounded">
                            <tbody>
                                <tr>
                                    <th scope="row">ID:</th>
                                    <td>{rocket.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Type:</th>
                                    <td>{rocket.type}</td></tr>
                                <tr>
                                    <th scope="row">Boosters:</th>
                                    <td>{rocket.boosters} pcs</td>
                                </tr>
                                <tr>
                                    <th scope="row">Company</th>
                                    <td>{rocket.company}</td></tr>
                                <tr>
                                    <th scope="row">Cost per launch:</th>
                                    <td>$ {rocket.cost_per_launch}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Success rate</th>
                                    <td>{rocket.success_rate_pct}%</td>
                                </tr>
                                <tr>
                                    <th scope="row">Read more:</th>
                                    <td><a href={rocket.wikipedia}>Wikipedia</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
    )
}
