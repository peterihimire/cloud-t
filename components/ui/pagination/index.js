import React from "react";
import ReactPaginate from "react-paginate";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const pagination = ({
  pageCount,
  containerClassName,
  activeClassName,
  previousClassName,
  nextClassName,
  disabledClassName,
}) => {
  return (
    <ReactPaginate
      previousLabel={<LeftOutlined />}
      nextLabel={<RightOutlined />}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      previousClassName={previousClassName}
      nextClassName={nextClassName}
      pageRangeDisplayed={0}
      containerClassName={containerClassName}
      activeClassName={activeClassName}
      disabledClassName={disabledClassName}
    />
  );
};

export default pagination;
