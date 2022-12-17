import React from "react";
import { StyledEmptyDiv } from "./style";

const EmptyDiv = () => {
  return (
    <StyledEmptyDiv>
      <h4>Sua sacola está vazia</h4>
      <span>Adicione itens</span>
    </StyledEmptyDiv>
  );
};

export default EmptyDiv;
