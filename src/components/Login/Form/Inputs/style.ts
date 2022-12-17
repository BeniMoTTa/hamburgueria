import styled from "styled-components";

export const InputStyled = styled.input`
  width: 98%;
  height: 50.5px;
  padding-left: 15px;
  color: #333333;
  background-color: transparent;
  font-size: 16px;
  border: none;
  margin-top: 7px;

  border-radius: 5px;
  outline: none;

  ::placeholder {
    color: #333333;
    opacity: 35%;
  }
`;
export const StyledFieldSet = styled.fieldset`
  width: 100%;
  border: 2px groove #333333;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: relative;

  label {
    position: absolute;
    font-size: 14px;
    transform: translateY(-105%);
    background-color: white;
    color: gray;
    padding: 5px;
    margin-left: 20px;
    font-weight: 600;
    left: -10px;
  }
`;
