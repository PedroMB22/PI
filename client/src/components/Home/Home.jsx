import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions';
import CardsDogs from '../Cards/CardsDogs';
import Loader from '../../utilities/Loader';
import '../../css/home.css';
import Pagination from '../Pagination/Pagination';
import FilterTemperaments from '../Filter/FilterTemperaments';

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const cardsPerPage = 8;

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTemperamentChange = (e) => {
    setSelectedTemperament(e.target.value);
    setCurrentPage(1); // Restablecer la página a la primera al cambiar el temperamento seleccionado
  };

  const filterByTemperament = (dog) => {
    if (selectedTemperament === '') {
      return true; // No se ha seleccionado ningún temperamento, se muestra el perro
    }

    let dogTemperaments = [];

    // Para perros de la API
    if (typeof dog.temperament === 'string') {
      dogTemperaments = dog.temperament.split(', ');
    }

    // Para perros de la base de datos
    if (Array.isArray(dog.temperaments)) {
      dogTemperaments = dog.temperaments.map((temperament) => temperament.name);
    }

    return dogTemperaments.includes(selectedTemperament);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  let filteredCards = allDogs.data || [];

  filteredCards = filteredCards.filter(filterByTemperament);

  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const topCards = currentCards.slice(0, 4);
  const bottomCards = currentCards.slice(4, 8);

  return (
    <>
      <h1>Home</h1>
      <FilterTemperaments
        selectedTemperament={selectedTemperament}
        onTemperamentChange={handleTemperamentChange}
      />
      <div className="cards-section">
        {allDogs.isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="top-cards">
              <CardsDogs allDogs={topCards} />
            </div>
            <div className="bottom-cards">
              <CardsDogs allDogs={bottomCards} />
            </div>
          </>
        )}
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={filteredCards.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        selectedTemperament={selectedTemperament}
      />
    </>
  );
};

export default Home;
