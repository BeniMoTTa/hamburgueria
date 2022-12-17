import React from "react";
import Logo from "../AreaExtraLobby/logo.svg";
import shopping from "../AreaExtraLobby/shopping-bag.svg";
import { StyledAreaExtra } from "./style";

const AreaExtra = () => {
  return (
    <StyledAreaExtra>
      <div className="area-extra-login">
        <img src={Logo} alt="" className="logoSite" />
        <div className="card-login">
          <div>
            <img src={shopping} alt="" className="shoppingBag" />
          </div>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores </strong>
            ingredientes.
          </p>
        </div>
        <div className="area-ornament">
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
          <span>a</span>
        </div>
      </div>
    </StyledAreaExtra>
  );
};

export default AreaExtra;
