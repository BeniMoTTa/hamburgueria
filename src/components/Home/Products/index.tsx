import React from "react";
import { StyledContainerProducts } from "./style";
import hamburguer from "../Products/hamburguer.svg";
import { StyledButtonAddProduct } from "../../../Styles/Buttons";

const CardProducts = () => {
  return (
    <StyledContainerProducts>
      <ul className="list-products">
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
        <li className="card">
          <div className="imgArea">
            <img src={hamburguer} alt="" />
          </div>
          <div className="text-card">
            <h5>Hamburguer</h5>
            <p>Sanduíches</p>
            <span>R$ 14,00</span>
            <StyledButtonAddProduct>Adicionar</StyledButtonAddProduct>
          </div>
        </li>
      </ul>
    </StyledContainerProducts>
  );
};

export default CardProducts;
