import React from 'react';

const WeightFilter = ({ sortOrder, onSortChange }) => {
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    onSortChange(sortValue);
  };

  return (
    <div className="weight-filter">
      <label htmlFor="sort-select">Sort by Weight:</label>
      <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
};

export default WeightFilter;
