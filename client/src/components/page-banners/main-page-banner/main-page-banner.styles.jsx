import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: -webkit-fill-available;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  background-image: ${({ primaryImage }) => `url(${primaryImage})`};
  background-size: cover;
  background-position: center;
  height: 85vh;
  -webkit-font-smoothing: antialiased;
  box-shadow: inset 0px -130px 200px -45px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 0.93;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: transform 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
  .container {
    display: flex;
    flex-direction: column;
    color: #fff;
    &--1 {
      align-items: center;
      padding-bottom: 90px;
    }
    &--2 {
      align-items: flex-start;
      padding-bottom: 500px;
      padding-left: 100px;
      font-family: Roboto, Helvetica, Arial, sans-serif;
      font-size: 23px;
      .title {
        font-family: Montserrat, Helvetica, Arial, sans-serif;
        font-size: 45px;
        font-weight: 700;
      }
    }
  }
`;

export const SecondImageWrapper = styled.div`
  background-image: ${({ secondaryImage }) => `url(${secondaryImage})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  padding: 140px;
`;
