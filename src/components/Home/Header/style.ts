import styled from "styled-components";

export const StyledHeaderHome = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  .container-header {
    width: 96%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logoimg {
    width: 159px;
  }
  .inputHeader {
    border: 2px solid black;
    width: 320px;
    height: 60px;
    border-radius: 8px;
    background-color: white;
    display: none;
    align-items: center;
  }

  .inputHeader input {
    width: 80%;
    height: 100%;
    font-size: 18px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .inputHeader input::placeholder {
    font-size: 16px;
  }
  .inputHeader button {
    width: 18%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: none;
    border: none;
    background-color: #27ae60;
    border-radius: 8px;
  }
  .iconActive {
    color: white;
    font-size: 22px;
    font-weight: 800;
  }
  .interation-user .icon {
    width: 25px;
    font-size: 28px;
    color: #bdbdbd;
    font-weight: 700;
    cursor: pointer;
    margin-left: 15px;
  }
  .interation-user .iconSearch {
    width: 25px;
    font-size: 28px;
    color: #bdbdbd;
    font-weight: 700;
    cursor: pointer;
    margin-left: 15px;
  }
  .interation-user {
    position: relative;
  }
  .countCart {
    position: absolute;
    right: 25%;
    top: -35%;
    width: 21px;
    height: 23px;
    background-color: #27ae60;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    .container-header {
      width: 1400px;
    }
  }
  @media (min-width: 600px) {
    .interation-user .iconSearch {
      display: none;
    }
    .interation-user {
      position: relative;
    }

    .countCart {
      position: absolute;
      right: 7%;
      top: 10%;
    }

    .inputHeader {
      display: flex;
      border: 2px solid #27ae60;
    }
    .interation-user {
      display: flex;
      align-items: center;
    }
  }
`;
