const NameFilter = ({ sortOrder, onSortChange }) => {
    const handleSortChange = (e) => {
      const sortValue = e.target.value;
      onSortChange(sortValue);
    };
  
    return (
        <div className="name-filter">
          <label htmlFor="sort-select-name">Sort by Name:</label>
          <select id="sort-select-name" value={sortOrder} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      );
    };
  
  export default NameFilter;