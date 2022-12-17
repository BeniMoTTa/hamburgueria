import React, { useContext } from "react";
import { StyledContainerProducts } from "./style";

import { StyledButtonAddProduct } from "../../../Styles/Buttons";

import { CartContext } from "../../../context/CartContext";

const CardProducts = () => {
  const { addProductToCart, searchProducts } = useContext(CartContext);

  return (
    <StyledContainerProducts>
      <ul className="list-products">
        {searchProducts?.map((element) => (
          <li className="card" key={element.id}>
            <div className="imgArea">
              <img src={element.img} alt="" />
            </div>
            <div className="text-card">
              <h5>{element.name}</h5>
              <p>{element.category}</p>
              <span>
                {element.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <StyledButtonAddProduct onClick={() => addProductToCart(element)}>
                Adicionar
              </StyledButtonAddProduct>
            </div>
          </li>
        ))}
      </ul>
    </StyledContainerProducts>
  );
};

export default CardProducts;
