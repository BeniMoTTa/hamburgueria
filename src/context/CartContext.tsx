import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../lib/axiosClient";

interface iContexxtProps {
  openModal: () => void;
  modalIsOpen: boolean;
  closeModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cart: iCart[];
  addProductToCart: (info: iCart) => void;
  handleRemoveItemFromCart(id: iCart): void;
  removeAll: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  searchProducts: iProducts[];
}

interface iCart {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export const CartContext = createContext({} as iContexxtProps);
export interface iChildrenProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: iChildrenProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([] as iProducts[]);
  const [cart, setCart] = useState([] as iCart[]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getProducts() {
      const tokenValidate = localStorage.getItem("@TOKEN");

      if (tokenValidate) {
        try {
          api.defaults.headers.authorization = `Bearer ${tokenValidate}`;
          const { data } = await api.get("/products");
          setProducts(data);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    }
    getProducts();
  }, []);
  const searchProducts = !search
    ? products
    : products.filter(
        (element) =>
          element.name.toLowerCase().includes(search.toLowerCase()) ||
          element.category.toLowerCase().includes(search.toLowerCase())
      );
  function removeAll() {
    setCart([]);
    toast.info("Todos os itens foram removidos com sucesso!");
  }

  function addProductToCart(info: iCart) {
    const data = {
      id: info.id,
      img: info.img,
      name: info.name,
      price: info.price,
    };
    if (!cart.some((element) => element.id === data.id)) {
      setCart([...cart, data]);
      toast.success("Produto adicionado com sucesso");
    } else {
      toast.error("Produto já está no carrinho");
    }
  }

  function handleRemoveItemFromCart(id: iCart) {
    const filteredProduct = cart?.filter((element) => element !== id);
    setCart(filteredProduct);
    toast.info("O Produto foi removido!");
  }

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
        products,
        loading,
        setLoading,
        cart,
        addProductToCart,
        removeAll,
        handleRemoveItemFromCart,
        setSearch,
        search,
        searchProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
