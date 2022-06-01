import React, { Component } from 'react'
import './RocketCard.css'

export default class RocketCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'N/A',
            name: "Select a rocket to read more",
            type: "N/A",
            active: "N/A",
            stages: "N/A",
            boosters: "N/A",
            cost_per_launch: "N/A",
            success_rate_pct: "N/A",
            first_flight: "N/A",
            country: "N/A",
            company: "N/A",
            wikipedia: "N/A",
            description: "",
            flickr_images: "./SpaceX-logo.png",
            height: "0",
            width: "0",
            mass: "0",
            engineThrust: "0"
        }
    }

    chooseRocket = (rocketId) => {
    
        // Filter the rockets and setting state for modal
        let thisRocket = this.props.rocketInfo.filter((item) => item.id === rocketId)

        this.setState({
            id: thisRocket[0].id,
            name: thisRocket[0].name,
            type: thisRocket[0].type,
            active: thisRocket[0].active,
            stages: thisRocket[0].stages,
            boosters: thisRocket[0].boosters,
            cost_per_launch: thisRocket[0].cost_per_launch,
            success_rate_pct: thisRocket[0].success_rate_pct,
            first_flight: thisRocket[0].first_flight,
            country: thisRocket[0].company,
            company: thisRocket[0].company,
            wikipedia: thisRocket[0].wikipedia,
            description: thisRocket[0].description,
            flickr_images: thisRocket[0].flickr_images[0],
            height: thisRocket[0].height.meters,
            width: thisRocket[0].diameter.meters,
            mass: thisRocket[0].mass.kg,
            engineThrust: thisRocket[0].engines.thrust_sea_level.kN
        });
    }

    render() {
        return (
            <div >

                <div className="container row m-auto mt-5">
                    {this.props.rocketInfo.map((rocket, index) =>

                    <div className="col-md-6 m-auto mt-3" key={index+"rocket"}>
                            <a className="position-relative rocketInfo" onClick={() => this.chooseRocket(rocket.id)} data-bs-toggle="modal" href="#exampleModal" role="button" aria-expanded="false" aria-controls="exampleModal">
                                
                                <img className="img-fluid menu-image rounded" key={rocket.id} src={rocket.flickr_images} alt="rocket"></img>
                                <div className="overlay">
                                    <div className="text-light text-center">Read more</div>
                                    <p className="text-decoration-none text-dark text-center"><strong>{rocket.name}</strong></p>
                                    
                                </div>
                        </a>
                    </div>
                    )}
                </div>

                <div className="modal" id="exampleModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-light">{this.state.name}</h5>
                                <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card col mb-3 rocket-card m-auto">
                                    <img src={this.state.flickr_images} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h3 className="card-title text-light">{this.state.name}</h3>
                                        <p className="card-text text-light">{this.state.description}</p>
                                        <div className="col table-responsive">
                                            <h6 className="text-light">Specs</h6>
                                            <table className="table bg-light rounded">
                                                <thead>
                                                    <tr>
                                                        <th colSpan="3">Rocket Name: {this.state.name}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Height<h4>{this.state.height}m</h4></td>
                                                        <td><img src="./images/startup.png" className="img-fluid rocketSize" alt="..."></img></td>
                                                        <td></td>
                                                        <td><img src="./images/weight.png" className="img-fluid iconSize" alt="..."></img></td>
                                                        <td><h3>{this.state.mass} kg</h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>Diameter<h4>{this.state.width}m</h4></td>
                                                        <td></td>
                                                        <td><img src="./images/engine.png" className="img-fluid iconSize" alt="..."></img></td>
                                                        <td><h3>{this.state.engineThrust} kN</h3></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="table table-dark table-striped rounded">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">ID:</th>
                                                        <td>{this.state.id}</td>
                                                        <th scope="row">Type:</th>
                                                        <td>{this.state.type}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Boosters:</th>
                                                        <td>{this.state.boosters} pcs</td>
                                                        <th scope="row">Company</th>
                                                        <td>{this.state.company}</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Cost per launch:</th>
                                                        <td>$ {this.state.cost_per_launch}</td>
                                                        <th scope="row">Success rate</th>
                                                        <td>{this.state.success_rate_pct} %</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Read more:</th>
                                                        <td><a href={this.state.wikipedia}>Wikipedia</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}