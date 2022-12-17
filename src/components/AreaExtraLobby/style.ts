import styled from "styled-components";

export const StyledAreaExtra = styled.div`
  .area-extra-login {
    max-width: 377px;
  }
  .logoSite {
    width: 244px;
    margin-bottom: 25px;
  }
  .card-login {
    display: flex;
    height: 95px;
    align-items: center;
    border: 1px #e0e0e0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px;
    margin-bottom: 30px;
  }
  .card-login div {
    background-color: rgba(39, 174, 96, 0.1);
    height: 60px;
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .card-login p {
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
  }
  .area-ornament {
    margin-top: 30px;
    width: 220px;
    display: none;
    flex-wrap: wrap;
  }
  .area-ornament span {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #f2f2f2;
    color: #f2f2f2;
    margin: 10px;
  }
  @media (min-width: 600px) {
    .area-ornament {
      display: flex;
    }
  }
`;
