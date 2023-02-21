import React, { useState } from "react";
import styled, { css } from "styled-components";
import { getByName } from "../../redux/actions";
//import { clearGames } from "../../redux/actions";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(name))
    setName("")
    history.push('/search')
  }

  return (
    <Input>
      <Wrapper>
        <Wrapper>
          <StyledInput type="text" value={name} onChange={handleChange} />
        </Wrapper>
        <div>
          <Button  onClick={handleSubmit}>
            buscar
          </Button>
        </div>
      </Wrapper>
    </Input>
  );
};

export default Search;

const Input = styled.div`
  width: 1000px;
  align-items: center;
  justify-content: flex-end;;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;


const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  margin:1em;
  padding: 4em;
  border-radius: 18px;
  border: none;
  margin: 10px 50px 20px -10px;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledInput = styled.input`
  width: 100%;
  ${sharedStyles}
`;

const Button = styled.button`
  background-color: #eee;
  color: #0e0d0d;
  font-size: 1em;
  margin: 0 10px 8px 10px;
  height: 45px;
  padding: 0 2;
  border: 2px solid #0e0d0d;
  border-radius: 15px;
`;

