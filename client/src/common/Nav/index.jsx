import React from "react";
import Search from "./SearchBar";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/form");
  };

  return (
    <div>
      <Head>
        <Wrapper>
          <button onClick={handleClick}><span><h2>M T .</h2></span></button>
        </Wrapper>
        <Wrapper>
          <Search />
        </Wrapper>
      </Head>
    </div>
  );
};

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 1em;
  margin-top: 1em;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
