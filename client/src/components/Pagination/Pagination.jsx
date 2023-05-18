import React from 'react';
import '../../css/pagination.css';

const Pagination = ({ cardsPerPage, totalCards, currentPage, onPageChange }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const maxVisiblePages = 5; // Máximo de páginas visibles

  // Genera los números de página
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calcula el rango de páginas visibles
  let visiblePageNumbers = [];

  if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
    // Si la página actual está cerca del inicio
    visiblePageNumbers = pageNumbers.slice(0, maxVisiblePages);
  } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
    // Si la página actual está cerca del final
    visiblePageNumbers = pageNumbers.slice(
      totalPages - maxVisiblePages,
      totalPages
    );
  } else {
    // Si la página actual está en el medio
    const offset = Math.floor(maxVisiblePages / 2) - 1;
    visiblePageNumbers = pageNumbers.slice(
      currentPage - offset - 1,
      currentPage + offset
    );
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt; Anterior
        </button>
      )}

      {visiblePageNumbers.map((number) => (
        <button
          key={number}
          className={`page-link ${currentPage === number ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="page-link"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
