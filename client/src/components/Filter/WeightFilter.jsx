const WeightFilter = ({ sortOrder, onSortChange }) => {
    const handleSortChange = (e) => {
      const sortValue = e.target.value;
      onSortChange(sortValue);
    };
  
    return (
      <div className="filter weight-filter">
        <label htmlFor="sort-select-weight">Sort by Weight:</label>
        <select id="sort-select-weight" value={sortOrder || ''} onChange={handleSortChange}>
          <option value="">Select...</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    );
  };
  
  export default WeightFilter;
  