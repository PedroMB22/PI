import '../../css/filter.css'
const NameFilter = ({ sortOrder, onSortChange }) => {
    sortOrder = sortOrder || ""; // Si sortOrder es null, usamos una cadena vacía.
    const handleSortChange = (e) => {
      const sortValue = e.target.value;
      onSortChange(sortValue);
    };
  
    return (
      <div className="filter name-filter">
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
