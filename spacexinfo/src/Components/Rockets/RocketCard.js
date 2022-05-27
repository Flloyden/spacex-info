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

    chooseRocket = (e) => {
        console.log(e)

        let thisRocket = this.props.rocketInfo[e.target.selectedIndex - 1]
        //console.log(e.target.value)
        console.log(this.props.rocketInfo[e.target.selectedIndex])

        this.setState({
            id: thisRocket.id,
            name: thisRocket.name,
            type: thisRocket.type,
            active: thisRocket.active,
            stages: thisRocket.stages,
            boosters: thisRocket.boosters,
            cost_per_launch: thisRocket.cost_per_launch,
            success_rate_pct: thisRocket.success_rate_pct,
            first_flight: thisRocket.first_flight,
            country: thisRocket.company,
            company: thisRocket.company,
            wikipedia: thisRocket.wikipedia,
            description: thisRocket.description,
            flickr_images: thisRocket.flickr_images[0],
            height: thisRocket.height.meters,
            width: thisRocket.diameter.meters,
            mass: thisRocket.mass.kg,
            engineThrust: thisRocket.engines.thrust_sea_level.kN
        });


    }


    render() {

        return (
            <div >
                <div className="col-6 m-auto">
                    <select className="form-select col-6 m-auto" onChange={this.chooseRocket}>
                        <option>Select Rocket</option>
                        {this.props.rocketInfo.map(rocket =>

                            <option key={rocket.id} value={rocket.name}>
                                {rocket.name}
                            </option>


                        )}
                    </select>
                </div>



                <div className="card col-lg-8 mb-3 rocket-card m-auto">
                    <img src={this.state.flickr_images} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h3 className="card-title text-light">{this.state.name}</h3>
                        <p className="card-text text-light">{this.state.description}</p>
                        <div className="col">
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
                                        <td>{this.state.boosters}</td>
                                        <th scope="row">Company</th>
                                        <td>{this.state.company}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cost per launch:</th>
                                        <td>{this.state.cost_per_launch}</td>
                                        <th scope="row">Success rate</th>
                                        <td>{this.state.success_rate_pct}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Read more:</th>
                                        <td><a href={this.state.wikipedia}>Wikipedia</a></td>
                                        <th scope="row">Success rate</th>
                                        <td>{this.state.success_rate_pct}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>



            </div>


        )

    }
}