import styled from "styled-components";

export const StyledCartTotal = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 2px solid #e0e0e0;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 0px 0px 8px 8px;
  padding-bottom: 10px;

  @media (min-width: 385px) {
    width: 100%;
  }

  div {
    display: flex;
    width: 94%;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    margin-top: 15px;
  }
  div p {
    font-size: 16px;
    font-weight: 600;
  }

  div span {
    font-size: 16px;
    font-weight: 700;
    color: #828282;
  }
  button {
    width: 95%;
    height: 60px;
    background-color: #e0e0e0;
    border-radius: 8px;
    border: none;
    color: #828282;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
  button:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
