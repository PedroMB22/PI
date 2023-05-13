import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dogsActions } from '../../redux/actions/dogs.actions';
import CardsDogs from '../Cards/CardsDogs';
import Loader from '../../utilities/Loader';
const Home = () => {
    const dispatch = useDispatch();

  const allDogs = useSelector((state) => state.dogsReducer);

  useEffect(() => {
    dispatch(dogsActions.get());
  }, [dispatch]);
  console.log(allDogs);
  return (
    <> 
    <h1>Home</h1>
    {allDogs.isLoading ===true
    ?<Loader></Loader>
    :<CardsDogs AllDogs={allDogs.data}/>
    }
    </>

  )
}


export default Home