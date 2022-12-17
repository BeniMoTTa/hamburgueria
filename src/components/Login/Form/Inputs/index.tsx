import React from "react";
import { InputStyled, StyledFieldSet } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form/dist/types/errors";
interface iInputProps {
  id: string;
  label: string;
  type: "text" | "name" | "email" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
  // error?: FieldErrorsImpl;
}
const Inputs = ({
  id,
  label,
  type,
  placeholder,
  // error,
  register,
}: iInputProps) => {
  return (
    <StyledFieldSet>
      <label htmlFor={id}>{label}</label>
      <InputStyled
        type={type}
        placeholder={placeholder}
        {...register}
        required
      />
      {/* {error && <p>{error.message}</p>} */}
    </StyledFieldSet>
  );
};
export default Inputs;
