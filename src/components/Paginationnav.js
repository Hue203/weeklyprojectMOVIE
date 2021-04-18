import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

const PaginationNav = ({ page, setPage }) => {
  const changeCurrentPage = (numPage) => {
    setPage(numPage);
  };
  return (
    <div className="pagination">
      <Pagination
        currentPage={page}
        totalPages={45}
        changeCurrentPage={changeCurrentPage}
        theme="square-i"
      />
    </div>
  );
};

export default PaginationNav;
