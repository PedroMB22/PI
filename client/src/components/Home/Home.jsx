import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions';
import CardsDogs from '../Cards/CardsDogs';
import Loader from '../../utilities/Loader';
import '../../css/home.css';
import Pagination from '../Pagination/Pagination';
import TemperamentsFilter from '../Filter/TemperamentsFilter';
import WeightFilter from '../Filter/WeightFilter';
import NameFilter from '../Filter/NameFilter';

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTemperament, setSelectedTemperament] = useState(null);
  const [weightSortOrder, setWeightSortOrder] = useState(null);
  const [nameSortOrder, setNameSortOrder] = useState(null);

  const cardsPerPage = 8;

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTemperamentChange = (e) => {
    setSelectedTemperament(e.target.value);
    setCurrentPage(1);
  };

  const handleWeightSortChange = (sortValue) => {
    setNameSortOrder('');
    setWeightSortOrder(sortValue);
    setCurrentPage(1);
  };
  
  const handleNameSortChange = (sortValue) => {
    setWeightSortOrder('');
    setNameSortOrder(sortValue);
    setCurrentPage(1);
  };

  const filterByTemperament = (dog) => {
    if (selectedTemperament === null) {
      return true;
    }

    let dogTemperaments = [];

    if (typeof dog.temperament === 'string') {
      dogTemperaments = dog.temperament.split(', ');
    }

    if (Array.isArray(dog.temperaments)) {
      dogTemperaments = dog.temperaments.map((temperament) => temperament.name);
    }

    return dogTemperaments.includes(selectedTemperament);
  };
  console.log(allDogs.data) 
  const filterAndSortDogs = (dogs) => {
    console.log("FILTER DOGS", dogs);
    if (!Array.isArray(dogs)) {
      console.log('dogs is not an array:', dogs);
      return [];
    }
    let filteredDogs = dogs?.filter(filterByTemperament);
  
    filteredDogs = filteredDogs.filter((dog) => {
      // Filtrar los perros que no tienen valor en el peso
      return !isNaN(parseFloat(dog.weight));
    });
  
    filteredDogs = filteredDogs.map((dog) => {
      const weightRange = dog.weight.split(' - ');
      let weightAverage;
  
      // Si el perro tiene un solo valor de peso, ese será su peso promedio
      if (weightRange.length === 1) {
        weightAverage = parseFloat(weightRange[0]);
      } else {
        // Calcular el peso promedio como antes para los perros con un rango de peso
        weightAverage =
          (parseFloat(weightRange[0]) + parseFloat(weightRange[1])) / 2;
      }
  
      return {
        ...dog,
        weightAverage,
      };
    });

    // Apply the name sort order if it's set
    if (nameSortOrder === 'asc') {
      filteredDogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (nameSortOrder === 'desc') {
      filteredDogs.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Apply the weight sort order if it's set, it won't overwrite name sorting because JavaScript's sort is stable
    if (weightSortOrder === 'asc') {
      filteredDogs.sort((a, b) => a.weightAverage - b.weightAverage);
    } else if (weightSortOrder === 'desc') {
      filteredDogs.sort((a, b) => b.weightAverage - a.weightAverage);
    }

    return filteredDogs;
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  let filteredCards = allDogs.data ? filterAndSortDogs(allDogs.data) : [];

  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const topCards = currentCards.slice(0, 4);
  const bottomCards = currentCards.slice(4, 8);

  return (
    <>
      <h1>Home</h1>
      <TemperamentsFilter
        selectedTemperament={selectedTemperament}
        onTemperamentChange={handleTemperamentChange}
      />
      <WeightFilter
        sortOrder={weightSortOrder}
        onSortChange={handleWeightSortChange}
      />
      <NameFilter sortOrder={nameSortOrder} onSortChange={handleNameSortChange} />
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
