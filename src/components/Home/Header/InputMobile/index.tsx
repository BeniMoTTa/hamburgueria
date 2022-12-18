import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CartContext } from "../../../../context/CartContext";
import { StyledInputMobile } from "./style";

const InputMobile = () => {
  const { clickMobile, search, setSearch } = useContext(CartContext);
  return (
    <StyledInputMobile>
      <input
        type="text"
        placeholder="Qual produto quer encontrar?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <BiSearchAlt2 className="icon" onClick={() => clickMobile()} />
      </button>
    </StyledInputMobile>
  );
};

export default InputMobile;
