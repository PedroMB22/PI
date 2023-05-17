import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/cards.css'

const Card = (props) => {
    const { id, name, image, temperament, weight, life_span } = props
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-text">
                <h3>{name}</h3>
                <p>Temperament: {temperament}</p>
                <p>Weight: {weight}</p>
                <p>Life Span: {life_span}</p>
            </div>
            <Link to={`/dogdetail/${id}`}>
                <button className="input-box button">Details</button>
            </Link>
        </div>
    )
}

export default Card
