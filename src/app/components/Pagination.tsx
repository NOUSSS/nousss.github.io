import { FC, ReactNode, useEffect, useMemo, useState } from "react";

interface PaginationProps {
  items: ReactNode[];
  itemsPerPage: number;
}

const Pagination: FC<PaginationProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const newPages: ReactNode[][] = [];
    let indexPage = 0;

    for (let i = 0; i < items.length; i++) {
      if (!newPages[indexPage]) {
        newPages[indexPage] = [];
      }
      newPages[indexPage].push(items[i]);

      if ((i + 1) % itemsPerPage === 0) {
        indexPage++;
      }
    }
    return newPages;
  }, [items, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
  };

  const handlePageClick = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const renderPageNumbers = () => {
    const totalPages = pages.length;
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`${currentPage === i ? "btn" : "glassBtn"} mx-1`}
          >
            {i + 1}
          </button>,
        );
      }
    } else {
      if (currentPage <= 2) {
        for (let i = 0; i < 3; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`${currentPage === i ? "btn" : "glassBtn"} mx-1`}
            >
              {i + 1}
            </button>,
          );
        }
        pageNumbers.push(
          <span className="glassBtn mx-1 text-white" key="dots1">
            ...
          </span>,
        );
        pageNumbers.push(
          <button
            key={totalPages - 1}
            onClick={() => handlePageClick(totalPages - 1)}
            className={`${currentPage === totalPages - 1 ? "btn" : "glassBtn"} mx-1`}
          >
            {totalPages}
          </button>,
        );
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(
          <button
            key={0}
            onClick={() => handlePageClick(0)}
            className={`${currentPage === 0 ? "btn" : "glassBtn"} mx-1`}
          >
            1
          </button>,
        );
        pageNumbers.push(
          <span className="glassBtn mx-1 text-white" key="dots2">
            ...
          </span>,
        );
        for (let i = totalPages - 3; i < totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`${currentPage === i ? "btn" : "glassBtn"} mx-1`}
            >
              {i + 1}
            </button>,
          );
        }
      } else {
        pageNumbers.push(
          <button
            key={0}
            onClick={() => handlePageClick(0)}
            className={`${currentPage === 0 ? "btn" : "glassBtn"} mx-1`}
          >
            1
          </button>,
        );
        pageNumbers.push(
          <span className="glassBtn mx-1 text-white" key="dots3">
            ...
          </span>,
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`${currentPage === i ? "btn" : "glassBtn"} mx-1`}
            >
              {i + 1}
            </button>,
          );
        }
        pageNumbers.push(
          <span className="glassBtn mx-1 text-white" key="dots4">
            ...
          </span>,
        );
        pageNumbers.push(
          <button
            key={totalPages - 1}
            onClick={() => handlePageClick(totalPages - 1)}
            className={`${currentPage === totalPages - 1 ? "btn" : "glassBtn"} mx-1`}
          >
            {totalPages}
          </button>,
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {pages[currentPage]?.map((item, index) => (
          <div key={index} className="mx-2 w-36 md:w-40">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-center sm:flex-row">
        <button
          onClick={handlePrevPage}
          className="glassBtn mx-1"
          disabled={currentPage === 0}
        >
          Précédent
        </button>

        <div className="my-2 flex flex-row justify-center sm:my-0">
          {renderPageNumbers()}
        </div>

        <button
          onClick={handleNextPage}
          className="glassBtn mx-1"
          disabled={currentPage === pages.length - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Pagination;
