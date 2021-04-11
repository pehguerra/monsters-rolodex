import React from 'react'
import './Card.css'

function Card({ monster }) {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
            <h2>{ monster.name }</h2>
            <p>{ monster.email }</p>
        </div>
    )
}

export default Card
