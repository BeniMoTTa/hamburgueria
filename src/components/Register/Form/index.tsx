import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/UserContext";
import registerSchema from "../../../Schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButtonRegister } from "../../../Styles/Buttons";
import InputsRegister from "./InputsRegister";
import { StyledFormRegister } from "./style";
import { SubmitHandler } from "react-hook-form/dist/types/form";

interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormRegister = () => {
  const { currentRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
    const response = { ...data };
    currentRegister(response);
    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)} noValidate>
      <InputsRegister
        id="Name"
        label="Nome"
        type="text"
        placeholder="Escreva seu nome!"
        register={register("name")}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <InputsRegister
        id="email"
        label="Email"
        type="email"
        placeholder="Escreva aqui seu melhor email!"
        register={register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <InputsRegister
        id="password"
        label="Senha"
        type="password"
        placeholder="Escreva aqui a sua senha!"
        register={register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <InputsRegister
        id="confirmpassword"
        label="Confirmar Senha"
        type="password"
        placeholder="Escreva sua senha novamente!"
        register={register("confirmPassword")}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <StyledButtonRegister type="submit">Cadastrar</StyledButtonRegister>
    </StyledFormRegister>
  );
};

export default FormRegister;
