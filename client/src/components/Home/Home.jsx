import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions/dogs.actions';

const Home = () => {
    const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogsReducer);

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);
  console.log(allDogs);
  return (
    //fragments
    <> 
    <h1>Home</h1>
    </>

  )
}


export default Home