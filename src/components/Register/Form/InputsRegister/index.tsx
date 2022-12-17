import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form/dist/types/errors";
import { FieldSetRegister, StyledInputRegister } from "./style";
interface iInputProps {
  id: string;
  label: string;
  type: "text" | "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldErrorsImpl;
}
const InputsRegister = ({
  id,
  label,
  type,
  placeholder,
  register,
  error,
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
