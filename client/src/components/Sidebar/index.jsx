import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBar = ({ handleClick }) => {
  return (
    <div>
      <Titulo>
        <ul>
          <li>
            <Linked to="/form">
              <Paf>Crear +</Paf>
            </Linked>
          </li>
        </ul>
        <ul>
          <li>
            <Linked to="/">
              <Paf>Inicio</Paf>
            </Linked>
          </li>
        </ul>
        <ul>
          <li>
            <Linked to="/about">
              <Paf>About</Paf>
            </Linked>
          </li>
        </ul>
        <hr />
        <div>
          <h2>Categorias: </h2>
        </div>

        <div>
          <Li onClick={() => handleClick("Todos")}>
            <Paf>Todos</Paf>
          </Li>

          <Li onClick={() => handleClick("Action")}>
            <Paf>Action</Paf>
          </Li>

          <Li onClick={() => handleClick("Adventure")}>
            <Paf>Adventure</Paf>
          </Li>

          <Li onClick={() => handleClick("RPG")}>
            <Paf>RPG</Paf>
          </Li>
        </div>
      </Titulo>
    </div>
  );
};

const Titulo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.4em;
  padding: 0.85px;
`;
const Paf = styled.p`
  font-size: 1rem;
`;

const Linked = styled(Link)`
  display: flex;
  cursor: pointer;
`;

const Li = styled.li`
  display: flex;
  cursor: pointer;
`;
