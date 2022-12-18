import styled from "styled-components";

export const StyledCart = styled.ul`
  padding-top: 20px;
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 15px;
  max-height: 450px;
  overflow: auto;

  li {
    width: 100%;
    height: 85px;
    display: flex;
    margin-bottom: 20px;
  }
  li .areaImg {
    height: 100%;
    min-width: 80px;
    max-width: 110px;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    border-radius: 8px;
  }
  li .areaImg img {
    width: 75%;
  }
  li .interation-user-cart {
    width: 100%;
    margin-left: 10px;
  }
  li .interation-user-cart .allign-btn {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .iconTrash {
    font-size: 20px;
    cursor: pointer;
  }

  .countProduct {
    background-color: #f2f2f2;
    width: 108px;
    height: 32px;
    display: flex;
    align-items: center;
  }
  .countProduct button {
    width: 30%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: red;
    cursor: pointer;
  }
  .countProduct div {
    width: 40%;
    display: flex;
    justify-content: center;
    background-color: white;
  }
`;
