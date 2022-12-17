import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Esse campo é obrigatório, digite seu nome!")
    .min(2, "O nome precisa ter pelo 2 caracteres.")
    .max(250, "O nome pode ter no máximo 250 caracteres."),

  email: yup
    .string()
    .required("Esse campo é obrigatório, digite seu email!")
    .email("É necessário fornecer um email."),

  password: yup
    .string()
    .required("A senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial"
    )
    .min(8, "É necessário uma senha de pelos 8 caracteres"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha não confere!"),
});
export default registerSchema;
