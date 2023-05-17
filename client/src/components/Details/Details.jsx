import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = ({ allDogs }) => {
  const { id } = useParams();
  const dog = allDogs?.find(dog => dog.id.toString() === id.toString());
  if (!dog) {
    return <h2>No se encontró al perro</h2>
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p>Temperament: {dog.temperament}</p>
      <p>Weight: {dog.weight}</p>
      <p>Life Span: {dog.life_span}</p>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      allDogs: state.dogsReducer.data
    }
  }

export default connect(mapStateToProps)(Details);
