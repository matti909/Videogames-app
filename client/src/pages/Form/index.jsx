import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { getGenres, clearByTemp } from "../../redux/actions";
import styled, { css } from "styled-components";
import reducer from "./Reducer";
import axios from "axios";
import { Dropdown } from "./Dropdown";
import { useHistory } from "react-router-dom";

const initialState = {
  name: "",
  released: "",
  rating: 0,
  description: "",
  genres: [],
};

export const Form = () => {
  const genres = useSelector((store) => store.genres);

  const history = useHistory();

  let [form, dispatch] = useReducer(reducer, initialState);

  let [error, setError] = useState({});

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  let handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/post", form);

    dispatch(clearByTemp());

    history.push("/");
  };

  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "Ingresar un Nombre";
    } else if (form.name.length < 4) {
      errors.name = "Al menos 4 caracteres";
    }
    if (!form.description) {
      errors.description = "Ingresar Descripcion";
    } else if (form.description.length < 8) {
      errors.description = "La Descripcion debe tener al menos 8 caracteres";
    }
    if (!form.rating) {
      errors.rating = "Ingresar puntuación";
    } else if (!/^[1-5]$/.test(form.rating)) {
      errors.rating = "Rating must be between 1 and 5";
    }
    return errors;
  };

  const handleBlur = () => {
    let objError = validate(form);
    setError(objError);
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        {!form.name || !form.rating || error.description ? null : (
          <StyledButton type="submit" value="enviar" />
        )}
        <h2>FORM</h2>
        <hr />
        <div>
          <label>Name:</label>
          <StyledInput
            type="text"
            value={form.name}
            name="name"
            onBlur={handleBlur}
            onChange={(e) =>
              dispatch({
                type: "ENTER_DATA",
                value: e.target.value,
                key: "name",
              })
            }
          />
        </div>
        <span style={{ visibility: error.name ? "visible" : "hidden" }}>
          {error.name}{" "}
        </span>
        <div>
          <label>Released:</label>
          <StyledInput
            type="date"
            value={form.released}
            name="released"
            onChange={(e) =>
              dispatch({
                type: "ENTER_DATA",
                value: e.target.value,
                key: "released",
              })
            }
          />
        </div>
        <div>
          <label>-Rating-</label>
          <StyledInput
            type="number"
            name="rating"
            value={form.rating}
            min="0"
            max="5"
            onBlur={handleBlur}
            onChange={(e) =>
              dispatch({
                type: "ENTER_DATA",
                value: e.target.value,
                key: "rating",
              })
            }
          ></StyledInput>
        </div>
        <span style={{ visibility: error.rating ? "visible" : "hidden" }}>
          {error.rating}{" "}
        </span>
        <div>
          <label>-Description-</label>
          <StyledInput
            className="decription"
            type="text"
            name="description"
            value={form.description}
            onBlur={handleBlur}
            onChange={(e) =>
              dispatch({
                type: "ENTER_DATA",
                value: e.target.value,
                key: "description",
              })
            }
          ></StyledInput>
        </div>
        <span style={{ visibility: error.description ? "visible" : "hidden" }}>
          {error.description}{" "}
        </span>
        <div>
          <Dropdown
            genres={genres}
            onChange={(e) =>
              dispatch({
                type: "TEMP_UPDATE",
                value: e.target.value,
                key: "genres",
              })
            }
          />
        </div>

        <button type="submit" className="button-create">
          CREATE
        </button>
      </StyledForm>
    </StyledFormWrapper>
  );
};

const sharedStyles = css`
  background-color: #afaeae;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  color: #000;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 20px;
  color: #000;
  margin-top: 10px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 600px;
  margin: 5px;
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0 0px 0;
  ${sharedStyles}
`;

const StyledButton = styled.input`
  background-color: #c4c2c2;
  color: #030303;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;