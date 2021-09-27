import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";

export const Container = styled.div`
  width: 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 0px;
  right: 0px;
  background-color: rgb(0, 125, 181);
  color: white;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SVG = styled(CartIcon)`
`;
