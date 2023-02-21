import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ id, name, image, genres, rating }) {
  let genre = genres.map((e) => e);
  return (
    <CardConteiner>
      <Imge src={image} alt="no existe" />

      <Link
        style={{
          color: "initial",
          textDecoration: "none",
        }}
        to={`/detail/${id}`}
      >
        
        <Title>
          <h2><p>{name}</p></h2>
          {<p>Generos: {genre.join(" , ")}</p>}
          <p>Rating: {rating}</p>
        </Title>
      </Link>
    </CardConteiner>
  );
}

const CardConteiner = styled.div`
  margin: 0.5rem;
  width: 280px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-decoration: none;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;
const Imge = styled.img`
  width: 100%;
  height: 200px;
  padding: 1em;
  margin: 1px;
`;

const Title = styled.div`
  margin:1px;
  padding:1px;
`
