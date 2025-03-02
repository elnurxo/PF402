import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#6c757d")};
  padding: ${(props) => (props.size == "lg" ? "28px" : "14px")};
  border-radius: 7px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
const TomatoButton = styled(StyledBtn)`
  background-color: tomato;
`;

const Button = () => {
  return (
    <>
      <StyledBtn primary>click me!</StyledBtn>
      <TomatoButton>tomato button</TomatoButton>
    </>
  );
};

export default Button;
