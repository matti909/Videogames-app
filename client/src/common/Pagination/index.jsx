import React from "react";
import { useContext } from "react";
import { PaginationContext } from "../../context/paginationContext";
import Card from "../../components/Card";
import styled from "styled-components";

const renderData = (data) => {
  return (
    <Conteiner>
      {data.map((todo) => {
        return (
          <Card
            key={todo.id}
            id={todo.id}
            name={todo.name}
            image={todo.image}
            genres={todo.genres}
            rating={todo.rating}
          />
        );
      })}
    </Conteiner>
  );
};

const Pagination = ({ data }) => {
  const {
    currentPage,
    maxPageNumberLimit,
    minPageNumberLimit,
    handleLoadMore,
    pageDecrementBtn,
    handleClick,
    handleNextbtn,
    handlePrevbtn,
    itemsPerPage,
  } = useContext(PaginationContext);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <ListNumber key={number} id={number} onClick={handleClick}>
          {number}
        </ListNumber>
      );
    } else {
      return null;
    }
  });

  return (
    <div>
      <h1>VIDEOGAMES APP </h1>      
      <PageNumber>
        <ListNumber>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </ListNumber>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <ListNumber>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </ListNumber>
      </PageNumber>
      {renderData(currentItems)}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;
const PageNumber = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 30px;
`;
const ListNumber = styled.li`
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid rgba(44, 44, 48, 1);
  cursor: pointer;
`;

export default Pagination;
