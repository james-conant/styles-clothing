import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0 3vw;
  height: 6vh;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  z-index: 1;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const OptionsContainerLeft = styled.div`
  width: 20%;
`;

export const OptionsContainerRight = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionsContainerMid = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionContainer = styled.div`
  padding: 10px 12px;
`;

export const OptionLink = styled(Link)`
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
export const SignInLink = styled(Link)`
  padding: 10px 12px;
  color: rgb(0, 0, 0);
  font-weight: 700;
  font-size: 10px;
  width: 60px;

  cursor: pointer;
`;
