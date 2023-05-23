import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { temperamentsActions } from '../../redux/actions';
import '../../css/filter.css'

const TemperamentsFilter = ({ selectedTemperament, onTemperamentChange }) => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => Object.values(state.temperamentsReducer?.data || {}));

  // Ordenar los temperamentos alfabéticamente
  const sortedTemperaments = temperaments.sort((a, b) => a.localeCompare(b));

  React.useEffect(() => {
    dispatch(temperamentsActions.getTemperaments());
  }, [dispatch]);

  return (
    <div className="filter temperament-filter">
      <label htmlFor="sort-select-temperament">Temperament:</label>
      <select id="sort-select-temperament" value={selectedTemperament || ''} onChange={onTemperamentChange}>
        <option value="">All Temperaments</option>
        {sortedTemperaments.map((temperament) => (
          <option key={temperament} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemperamentsFilter;
