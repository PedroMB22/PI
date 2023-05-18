import React from 'react';
import Card from './Card';
import '../../css/cards.css';

const CardsDogs = (props) => {
  console.log(props);
  if (!props.allDogs) {
    return null; // Manejo de caso cuando los datos de los perros no están disponibles
  }

  return (
    <div className="card-container">
      {props.allDogs.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          image={dog.image}
          temperament={dog.temperaments?.map((temperament) => temperament.name).join(', ') || dog.temperament}
          height={dog.height}
          weight={dog.weight}
          life_span={dog.life_span}
        />
      ))}
    </div>
  );
};

export default CardsDogs;
