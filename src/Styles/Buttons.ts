import styled from "styled-components";

export const StyledButtons = styled.button`
  width: 95px;
  height: 40px;
  border-radius: 8px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  font-weight: 700;
  cursor: pointer;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
export const StyledButtonLoginEnter = styled.button`
  width: 98%;
  height: 60px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #219653;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
export const StyledButtonSendToRegister = styled.button`
  width: 98%;
  height: 60px;
  color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
export const StyledButtonBackToLogin = styled.button`
  border: none;
  color: #828282;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;

  :hover {
    text-decoration: underline;
  }
`;

export const StyledButtonRegister = styled.button`
  width: 98%;
  height: 60px;
  color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 600;
`;
export const StyledButtonAddProduct = styled.button`
  width: 106px;
  height: 40px;
  background-color: #27ae60;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
