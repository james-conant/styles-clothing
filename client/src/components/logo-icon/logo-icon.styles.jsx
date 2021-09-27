import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/main-logo.svg";

export const Container = styled(Link)`
  width: 45px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    /* width: 50px;
    padding: 0; */
  }
`;

export const SVG = styled(LogoIcon)``;
