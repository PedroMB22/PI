import React from 'react'
import '../../css/cards.css'

const Card = (props) => {
    const { name, image, temperament, weight, life_span } = props
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Temperament: {temperament}</p>
      <p>Weight: {weight}</p>
      <p>Life Span: {life_span}</p>
    </div>
  )
}

export default Card