import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButtonBackToLogin } from "../../Styles/Buttons";
import AreaExtra from "../AreaExtraLobby";
import FormRegister from "./Form";
import { StyledRegister } from "./style";

const Register = () => {
  const navigate = useNavigate();

  function backToLogin() {
    navigate("/");
  }

  return (
    <StyledRegister>
      <div className="container-general">
        <AreaExtra />
        <div className="areaRegister">
          <div>
            <h4>Register</h4>
            <StyledButtonBackToLogin onClick={() => backToLogin()}>
              Retornar para o login
            </StyledButtonBackToLogin>
          </div>
          <FormRegister />
        </div>
      </div>
    </StyledRegister>
  );
};

export default Register;
