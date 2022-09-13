import styled from "styled-components";

export const FormBackground = styled.video`
  object-fit: cover;
  height: 104vh;
  width: 110vw;
  position: absolute;

  /* @media screen and (max-width: 535px) {
    margin-left: 12px;
  } */

  /* @media screen and (max-width: 396px) {
    margin-left: 15px;
  } */
`;

export const Img = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 2200px) {
    margin-left: 5vw;
  }

  @media screen and (max-width: 1725px) {
    margin-top: 35vh;
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1280px) {
    position: absolute;
    height: 200px;
    width: 200px;
    margin-top: 2vh;
    margin-left: 41.5vw;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 37.5vw;
  }

  @media screen and (max-width: 767px) {
    height: 100px;
    width: 100px;
    margin-top: 1vh;
  }
`;

export const Img2 = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 2200px) {
    margin-right: 5vw;
  }

  @media screen and (max-width: 1725px) {
    margin-top: 35vh;
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1280px) {
    position: absolute;
    height: 200px;
    width: 200px;
    margin-top: 80vh;
    margin-left: 41.5vw;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 36vw;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const BtnContainer = styled.button`
  margin: 0;
  background: transparent;
  padding: 0;
  border: none;

  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37ff8b;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px red;

  &:hover {
    width: 100%;
    filter: drop-shadow(0 0 23px blue);
  }
`;

export const BtnText = styled.span`
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: blue;
  width: 0%;
  inset: 0;
  border-right: 1px solid blue;
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px blue;
`;
