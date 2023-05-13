import React from 'react'
import Card from './Card'
import '../../css/cards.css'

const CardsDogs = (props) => {
    console.log(props)
  return (
    <div className="card-container">
      {props?.AllDogs?.map((dog) => (
        <Card
          key={dog.id}
          name={dog.name}
          image={dog.image}
          temperament={dog.temperament}
          weight={dog.weight}
          life_span={dog.life_span}
        />
      ))}
    </div>
  )
}

export default CardsDogs