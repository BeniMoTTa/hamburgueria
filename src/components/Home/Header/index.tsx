import React, { useContext } from "react";
import { StyledHeaderHome } from "./style";
import logo from "../../AreaExtraLobby/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const HeaderHome = () => {
  const { openModal } = useContext(CartContext);
  const navigate = useNavigate();

  function quitUserAccount() {
    navigate("/");
    localStorage.clear();
  }
  return (
    <StyledHeaderHome>
      <div className="container-header">
        <img src={logo} alt="logoSite" className="logoimg" />
        <div className="interation-user">
          <div className="inputHeader">
            <input type="text" placeholder="Qual produto quer encontrar?" />
            <button>
              <BiSearchAlt2 className="iconActive" />
            </button>
          </div>
          <BiSearchAlt2 className="iconSearch" />
          <BsFillCartFill className="icon" onClick={() => openModal()} />
          <TbLogout className="icon" onClick={() => quitUserAccount()} />
        </div>
      </div>
    </StyledHeaderHome>
  );
};

export default HeaderHome;
