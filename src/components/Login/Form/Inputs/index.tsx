import React from "react";
import { InputStyled, StyledFieldSet } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  id: string;
  label: string;
  type: "text" | "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
}
const Inputs = ({ id, label, type, placeholder, register }: iInputProps) => {
  return (
    <StyledFieldSet>
      <label htmlFor={id}>{label}</label>
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register}
        required
      />
    </StyledFieldSet>
  );
};
export default Inputs;
