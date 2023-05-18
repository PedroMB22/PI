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
  const currentCards = allDogs.data
    ? allDogs.data.slice(indexOfFirstCard, indexOfLastCard)
    : [];

  // Dividir las tarjetas en 2 grupos (arriba y abajo)
  const topCards = currentCards.slice(0, 4);
  const bottomCards = currentCards.slice(4, 8);

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
          <div className="top-cards">
            <CardsDogs allDogs={topCards} />
          </div>
          <div className="bottom-cards">
            <CardsDogs allDogs={bottomCards} />
          </div>
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
