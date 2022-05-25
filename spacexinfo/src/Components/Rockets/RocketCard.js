import React, { Component } from 'react'
import './RocketCard.css'

export default class RocketCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'N/A',
            name: "N/A",
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
            flickr_images: "N/A"
        }



    }

    chooseRocket = (e) => {
        console.log(e)

        let thisRocket = this.props.rocketInfo[e.target.selectedIndex]
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
            flickr_images: thisRocket.flickr_images[0]
        });


    }


    render() {

        return (
            <div >
                <select className="form-select" onChange={this.chooseRocket}>
                    <option>Select Rocket</option>
                    {this.props.rocketInfo.map(rocket =>

                        <option key={rocket.id} value={rocket.name}>
                            {rocket.name}
                        </option>


                    )}
                </select>



                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={this.state.flickr_images} className="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-light">{this.state.name}</h5>
                                <p>{this.state.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h6 className="text-light">Specs</h6>
                        <ul className="bg-light rounded">
                            <li>
                                ID: {this.state.id}
                            </li>
                            <li>
                                Type: {this.state.type}
                            </li>
                            <li>
                                Active: {this.state.active}
                            </li>
                            <li>
                                Boosters: {this.state.boosters}
                            </li>
                            <li>
                                Company: {this.state.company}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        )

    }
}