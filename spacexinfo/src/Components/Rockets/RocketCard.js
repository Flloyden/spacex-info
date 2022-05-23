import React, { useState } from 'react'
import './RocketCard.css'

export default function RocketCard(props) {
    /**
     * 
     * Displays rocket card
     * 
     */
    return (
        <div>
            {props.rocketInfo.map((rocket) => {
                return (
                    <div className="card" key={rocket.id}>
                        <h5>{rocket.name}</h5>
                        <ul>
                            <li>
                                Id: {rocket.id}
                            </li>
                            <li>
                                Type: {rocket.type}
                            </li>
                        </ul>
                        
                    </div>
                    )
                  
            })}
        </div>
    )
}
