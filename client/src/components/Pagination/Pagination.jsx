import React from 'react';

const Pagination = ({ cardsPerPage, totalCards, currentPage, onPageChange }) => {
  const pageNumbers = [];

  // Calcula el número total de páginas
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Genera los números de página
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`page-link ${currentPage === number ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
