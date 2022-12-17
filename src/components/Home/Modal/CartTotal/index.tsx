import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { StyledCartTotal } from "./style";

export const CartTotal = () => {
  const { cart, removeAll } = useContext(CartContext);

  const sumCart = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );

  return (
    <StyledCartTotal>
      <div>
        <p>Total</p>
        <span>R$ {sumCart.toFixed(2)}</span>
      </div>
      <button onClick={() => removeAll()}>Remover todos</button>
    </StyledCartTotal>
  );
};
