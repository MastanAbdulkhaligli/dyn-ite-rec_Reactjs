import React from "react";
import ReactPaginate from "react-paginate";
import "../App.css";

function Page() {
  const handlePageClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={15}
        marginPagesDisplayed={4}
      ></ReactPaginate>
    </div>
  );
}

export default Page;
