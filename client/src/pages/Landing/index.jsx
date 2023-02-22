import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "./videogame.png";

export const LandingPage = () => {
  return (
    <Wrapper>
      <Conteiner>
        <Conteiner>
          <Ingresar to="/home">
            <p>Ingresar</p>
          </Ingresar>
        </Conteiner>
        <ConteinerImg>
          <Img src={img} alt="nohay" />
        </ConteinerImg>
      </Conteiner>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 100%;
  height: 640px;
  background-color: black;
`;

const Conteiner = styled.div`
  display: flex;
  border-radius: 50px;
  margin: 4px;
  padding: 10px;
  width: 500px;
  background-color: #111111;
`;

const Ingresar = styled(Link)`
  cursor: pointer;
`;

const ConteinerImg = styled.div`
  display:flex;
  width:50%;
  background-color: #0a0a0a;

`;

const Img = styled.img`
  object-fit: cover;
`;
