import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  padding: 0 60px;
  position: fixed;
  z-index: 1;
  background-color: white;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  /* width: 515px; */
  /* padding: 25px; */
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  /* width: 50%; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionsContainerMid = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 0 230px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 12px;
  cursor: pointer;
`;
