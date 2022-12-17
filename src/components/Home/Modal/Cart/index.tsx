import React, { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { StyledCart } from "./style";
import { HiOutlineTrash } from "react-icons/hi";

const Cart = () => {
  const { cart, handleRemoveItemFromCart } = useContext(CartContext);
  return (
    <StyledCart>
      {cart?.map((element) => (
        <li>
          <div className="areaImg">
            <img src={element.img} alt="" />
          </div>
          <div className="interation-user-cart">
            <div className="allign-btn">
              <h5>{element.name}</h5>
              <HiOutlineTrash
                className="iconTrash"
                onClick={() => handleRemoveItemFromCart(element)}
              />
            </div>
            <div className="countProduct">
              <button>-</button>
              <div>
                <span>0</span>
              </div>
              <button>+</button>
            </div>
          </div>
        </li>
      ))}
    </StyledCart>
  );
};

export default Cart;
