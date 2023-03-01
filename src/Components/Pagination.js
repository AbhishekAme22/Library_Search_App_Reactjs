import React from 'react';

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {page > 1 && (
        <button onClick={(event) => handlePageChange(event, page - 1)}>
          Previous
        </button>
      )}
      {page < totalPages && (
        <button onClick={(event) => handlePageChange(event, page + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
