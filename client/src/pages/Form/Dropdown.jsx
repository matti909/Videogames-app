import React from "react";
import styled from "styled-components";

export const Dropdown = ({ genres, onChange }) => {
  //const [displayed, setDisplayed] = useState(false);

  return (
    <Conteiner>
      <Panel>
        {genres.map((el) => (
          <Field key={el.id} onChange={onChange}>
            <input
              id={`input-${el.id}`}
              type="checkbox"
              name="genres"
              value={el.name}
            />
            <label name={el} htmlFor={`input-${el.id}`}>
              {el.name}
            </label>
          </Field>
        ))}
      </Panel>
    </Conteiner>
  );
};

const Conteiner = styled.fieldset`
  position: relative;
  border: none;
`;

const Panel = styled.div`
  position: absolute;
  background: white;
  color: black;
  padding: 10px;
  display: grid;
  font-size: 0.9rem;
  overflow-y: auto;
  height: 200px;
  grid-template-columns: repeat(3, 1fr);
`;
const Field = styled.fieldset`
  display: flex;
  align-items: center;
  border: none;
`;
