import React from "react";
import AreaExtra from "../AreaExtraLobby";
import FormLogin from "./Form";
import { StyledLogin } from "./style";

const Login = () => {
  return (
    <StyledLogin>
      <div className="container-general">
        <AreaExtra />
        <div className="areaLogin">
          <h4>Login</h4>
          <FormLogin />
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
