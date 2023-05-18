import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = ({ allDogs }) => {
  const { id } = useParams();
  const dog = allDogs?.find(dog => dog.id.toString() === id.toString());
  if (!dog) {
    return <h2>No se encontró al perro</h2>
  }
  console.log(dog);
    // Check if temperaments is an array and map it, otherwise use it as a string
  const temperaments = Array.isArray(dog.temperaments)
    ? dog.temperaments.map(t => t.name).join(', ')
    : dog.temperament;
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p>Temperament: {temperaments}</p>
      <p>Weight: {dog.weight || 'No data available'}</p>
      <p>Height: {dog.height || 'No data available'}</p>
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

