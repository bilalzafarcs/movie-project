import React from 'react';
import { PaginationProp } from '../utils/interfaces';

  const Paginations: React.FC<PaginationProp> = ({ totalPages, current_page, onPageChange }) => {
  const maxVisiblePages = 5; 
  const startPage = Math.max(1, current_page - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  const handlePageChange = (page: number) => {
    onPageChange(page); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="col-md-12">
      <nav className="page-navigation">
        <ul className="pagination">

          {startPage > 1 && (
            <>
              <li className={`page-item ${current_page === 1 ? 'active' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(1);
                  }}
                >
                  1
                </a>
              </li>
              {startPage > 2 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
            </>
          )}

         
        {visiblePages.map((page) => (
            <li className={`page-item ${page === current_page ? 'active' : ''}`} key={page}>
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ))}

         
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
              )}
              <li className={`page-item ${current_page === totalPages ? 'active' : ''}`}>
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(totalPages);
                  }}
                >
                  {totalPages}
                </a>
              </li>
            </>
          )}

        </ul>
      </nav>
    </div>
  );
};

export default Paginations;
