import styled from "styled-components";

export const StyledContainerProducts = styled.div`
  width: 96%;
  height: fit-content;
  padding-top: 50px;
  padding-bottom: 25px;

  ul {
    display: flex;
    margin: 0 auto;
    width: 96%;
    padding: none;
    overflow: auto;
    padding-left: 40px;
  }

  ul li {
    border: 2px solid #e0e0e0;
    min-width: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    margin-right: 2%;
    margin-bottom: 2%;
  }
  ul li:hover {
    border: 2px solid #27ae60;
  }
  .imgArea {
    background-color: #f5f5f5;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-card {
    padding-top: 20px;
    padding-left: 13px;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
  }
  .text-card h5 {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 13px;
  }
  .text-card p {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: #828282;
  }
  .text-card span {
    margin-top: 15px;
    margin-bottom: 12px;
    color: #27ae60;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    ul {
      overflow: auto;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1440px) {
    ul {
      width: 1400px;
    }
  } ;
`;
