import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../../context/CartContext";
import "../Modal/style.css";
import Cart from "./Cart";
import { CartTotal } from "./CartTotal";
import EmptyDiv from "./EmptyDiv";

Modal.setAppElement("#root");

function ModalCart() {
  const { modalIsOpen, closeModal } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="headerModal">
          <h3>Carrinho de Compras</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <Cart />
        {cart.length === 0 && <EmptyDiv />}
        {cart.length !== 0 && <CartTotal />}
      </Modal>
    </div>
  );
}
export default ModalCart;
