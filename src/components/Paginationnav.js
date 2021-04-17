import React from "react";
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

const PaginationNav = ({ page, setPage }) => {
  const changeCurrentPage = (numPage) => {
    setPage(numPage);
  };
  return (
    <div>
      <Pagination
        currentPage={page}
        totalPages={20}
        changeCurrentPage={changeCurrentPage}
        theme="bottom-border"
      />
    </div>
  );
};

export default PaginationNav;
