import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../common/Pagination";
import { SideBar } from "../../components/Sidebar";
import styled from "styled-components";
import { Nav } from "../../common/Nav";
import {
  getVideogames,
  getGenres,
  ordenarAsc,
  ordenarDes,
  getByGenre,
} from "../../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const bygen = useSelector((state) => state.bygen);

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  const handleClick = (value) => {
    dispatch(getByGenre(value));
    setLoading(true);
  };

  const handleOnClick = (e) => {
  
    if(e.target.name === "des") dispatch(ordenarDes());
    if(e.target.name === "asc") dispatch(ordenarAsc());
  };

  return (
    <div>
      <Nav />
      <DivConteiner>
        <BarConteiner>
          <SideBar handleClick={handleClick} />
        </BarConteiner>
        <PagConteiner>
          <Pagination data={loading ? bygen : videogames} />
        </PagConteiner>
        <div>
          <div>
            <div>
              <span>Ordenar por</span>
            </div>

            <div>
              <button name="asc" onClick={(e) => handleOnClick(e)}>
                A - Z
              </button>
              <button name="des" onClick={(e) => handleOnClick(e)}>
                Z - A
              </button>
            </div>
          </div>
        </div>
      </DivConteiner>
    </div>
  );
};
const DivConteiner = styled.div`
  display: flex;
  width: 100%;
`;
const BarConteiner = styled.div`
  width: 25%;
`;
const PagConteiner = styled.div`
  width: 75%;
`;
