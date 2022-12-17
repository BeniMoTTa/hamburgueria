import {
  StyledButtonLoginEnter,
  StyledButtonSendToRegister,
} from "../../../Styles/Buttons";
import Inputs from "./Inputs";
import { StyledFormLogin } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../Schemas/loginSchema";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

interface iLoginData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  function sendToRegister() {
    navigate("/register");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const submit: SubmitHandler<iLoginData> = async (data) => {
    const response = { ...data };
    console.log(response);
    login(response);
    reset();
  };
  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)} noValidate>
      <Inputs
        id="email"
        label="Email"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("email")}
      />
      <Inputs
        id="password"
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />

      <StyledButtonLoginEnter>Logar</StyledButtonLoginEnter>
      <div>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
      </div>
      <StyledButtonSendToRegister onClick={() => sendToRegister()}>
        Cadastrar
      </StyledButtonSendToRegister>
    </StyledFormLogin>
  );
};

export default FormLogin;
