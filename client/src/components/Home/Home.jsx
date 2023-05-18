import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions/dogs.actions';
import CardsDogs from '../Cards/CardsDogs';
import Loader from '../../utilities/Loader';
import '../../css/home.css';
import Pagination from '../Pagination/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);

  // Lógica para calcular el rango de tarjetas a mostrar en la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allDogs.data ? allDogs.data.slice(indexOfFirstCard, indexOfLastCard) : [];

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Home</h1>
      {allDogs.isLoading ? (
        <Loader />
      ) : (
        <>
          <CardsDogs allDogs={currentCards} />
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={allDogs.data ? allDogs.data.length : 0}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default Home;
