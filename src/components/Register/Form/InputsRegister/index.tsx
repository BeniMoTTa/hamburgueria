import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { FieldSetRegister, StyledInputRegister } from "./style";
interface iInputProps {
  id: string;
  label: string;
  type: "text" | "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
}
const InputsRegister = ({
  id,
  label,
  type,
  placeholder,
  register,
}: iInputProps) => {
  return (
    <FieldSetRegister>
      <label htmlFor={id}>{label}</label>
      <StyledInputRegister
        type={type}
        // disabled={disabled}
        placeholder={placeholder}
        {...register}
        required
      />
    </FieldSetRegister>
  );
};

export default InputsRegister;
