import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../css/cards.css'

const Card = (props) => {
    const { id, name, image, temperament, height, weight, life_span } = props
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-text">
                <h3>{name}</h3>
                <p>Temperament: {temperament}</p>
                <p>Weight: {weight?.metric || weight}</p>
            </div>
            <NavLink to={`/dogdetail/${id}`}>
                <button className="input-box button">Details</button>
            </NavLink>
        </div>
    )
}

export default Card


