import { createContext, useState } from "react";

interface iContexxtProps {
  openModal: () => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CartContext = createContext({} as iContexxtProps);
export interface iChildrenProps {
  children: React.ReactNode;
}
export const CartProvider = ({ children }: iChildrenProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <CartContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
