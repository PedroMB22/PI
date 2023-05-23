import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { dogsActions } from '../../redux/actions';
import '../../css/details.css';
import Loader from '../../utilities/Loader';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { data: dog, isLoading} = useSelector(state => state.byIdReducer);
  
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errors, setErrors] = useState(null); // Agregado aquí

useEffect(() => {
  dispatch(dogsActions.getDogById(id))
    .then(() => setIsDataLoaded(true))
    .catch((error) => {
      console.error("Failed to load dog details:", error);
      setErrors(error);
    });
}, [dispatch, id]);

if (errors) {
  return <h2>Error: {errors.toString()}</h2>;
}

if (!isDataLoaded || isLoading) {
  return <Loader />
}

if (!dog) {
  return <Loader />;
}

  
  
const temperaments = Array.isArray(dog.temperaments)
    ? dog.temperaments.join(', ')
    : dog.temperament || 'No data available';

    const imageUrl = "https://cdn2.thedogapi.com/images/"; 
    const imageDefault =  "https://img.freepik.com/vector-premium/lindo-cachorro-perro-salchicha-sobre-fondo-blanco-diseno-dibujos-animados_530689-342.jpg"; 
    const image = dog.image || (dog.reference_image_id ? `${imageUrl}${dog.reference_image_id}.jpg` : imageDefault);
  
    // Renderiza los detalles
    return (
      <div className="details-container">
        <div className="details-card">
          <h1>{dog.name}</h1>
          <img src={image} alt={dog.name} />
          <div className="details-text">
            <p>Temperament: {temperaments}</p>
            <p>Weight: {dog.weight?.imperial || dog.weight || 'No data available'}</p>
            <p>Height: {dog.height?.imperial || dog.height || 'No data available'}</p>
            <p>Life Span: {dog.life_span}</p>
          </div>
          <Link to="/" className="input-box button">Regresar al inicio</Link>
        </div>
      </div>
    );
    }

export default Details;
