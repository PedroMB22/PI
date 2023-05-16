import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions/dogs.actions';
import CardsDogs from '../Cards/CardsDogs';
import Loader from '../../utilities/Loader';
import '../../css/home.css'

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsReducer);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);

  return (
    <>
    
      <h1>Home</h1>
      {alertMessage ? (
        <div className="alert">{alertMessage}</div>
      ) : allDogs.isLoading ? (
        <Loader />
      ) : (
        <CardsDogs AllDogs={allDogs.data} />
      )}
    
    </>
  );
};

export default Home;
