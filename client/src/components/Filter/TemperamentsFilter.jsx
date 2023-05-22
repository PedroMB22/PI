import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { temperamentsActions } from '../../redux/actions';

const TemperamentsFilter = ({ selectedTemperament, onTemperamentChange }) => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => Object.values(state.temperamentsReducer?.data || {}));

  React.useEffect(() => {
    dispatch(temperamentsActions.getTemperaments());
  }, [dispatch]);

  return (
    <div className="temperament-filter">
      <select value={selectedTemperament || ''} onChange={onTemperamentChange}>
        <option value="">All Temperaments</option>
        {temperaments.map((temperament) => (
          <option key={temperament} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperamentsFilter;
