import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogIn } from "../../assets/user.svg";
import { ReactComponent as LogOut } from "../../assets/logout.svg";

export const Container = styled.div`
  width: 32px;
  cursor: pointer;
`;

export const SignInLink = styled(Link)``;

export const LogInSVG = styled(LogIn)``;

export const LogOutSVG = styled(LogOut)`
  width: 90%;
  padding-left: 20%;
`;
