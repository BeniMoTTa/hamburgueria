import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../../context/CartContext";
import "../Modal/style.css";
import EmptyDiv from "./EmptyDiv";

Modal.setAppElement("#root");

function ModalCart() {
  const { modalIsOpen, closeModal } = useContext(CartContext);
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
        <EmptyDiv />
      </Modal>
    </div>
  );
}
export default ModalCart;
