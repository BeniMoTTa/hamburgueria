import styled from "styled-components";

export const StyledInputMobile = styled.div`
  border: 2px solid #27ae60;
  width: 300px;
  height: 60px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  position: absolute;
  top: -30%;
  right: 15%;
  z-index: 99;

  input {
    width: 80%;
    height: 100%;
    font-size: 18px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  input::placeholder {
    font-size: 16px;
  }
  button {
    width: 18%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: none;
    border: none;
    background-color: #27ae60;
    border-radius: 8px;
    padding-right: 10px;
    color: #fff;
  }
  .icon {
    font-size: 25px;
    color: #fff;
  }
  @media (min-width: 600px) {
    display: none;
    border: 2px solid #27ae60;
  }
`;
