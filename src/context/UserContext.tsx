import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../lib/axiosClient";

export const UserContext = createContext({} as iUserContext);

interface iAuthProviderProps {
  children: React.ReactNode;
}

interface iUser {
  email: string;
  name: string;
  id: string;
}
interface iDataToRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface iUserContext {
  user: iUser | null;
  currentRegister: (data: iDataToRegister) => void;
  login: (data: iLoginData) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iLoginData {
  email: string;
  password: string;
}

interface iResponseRegister {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

const UserProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async (data: iLoginData) => {
    try {
      setLoading(true);
      const response = await api.post<iResponseRegister>("/login", data);

      const { accessToken, user: userResponse } = response.data;
      setUser(userResponse);
      localStorage.setItem("@TOKEN", accessToken);
      toast.success("O login está sendo realizado com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast.error("Login não se completou, por favor reavalie as informações");
    } finally {
      setLoading(false);
    }
  };

  async function currentRegister(data: iDataToRegister) {
    try {
      setLoading(true);
      await api.post<iResponseRegister>("/users", data);
      toast.success("Cadastro relizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("Usuário já cadastrado!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ login, user, currentRegister, setLoading, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
