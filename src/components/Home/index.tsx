import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import HeaderHome from "./Header";
import ModalCart from "./Modal";
import CardProducts from "./Products";
import { StyledContainerHome } from "./style";

const Home = () => {
  const { openModal, modalIsOpen, closeModal } = useContext(CartContext);
  return (
    <StyledContainerHome>
      <HeaderHome />
      <CardProducts />
      {modalIsOpen && <ModalCart />}
    </StyledContainerHome>
  );
};

export default Home;
