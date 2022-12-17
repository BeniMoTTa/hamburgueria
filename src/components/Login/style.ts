import styled from "styled-components";

export const StyledLogin = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;

  .container-general {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100vh;
    align-items: center;
  }

  @media (min-width: 600px) {
    .container-general {
      display: flex;
      flex-direction: row-reverse;
      gap: 50px;
    }
  }
  .areaLogin {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 467px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
  }
  .areaLogin h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 1050px) {
    .container-general {
      width: 1000px;
    }
  }
`;
