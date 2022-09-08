import styled from "styled-components";

//footer section

export const FooterSection = styled.footer`
  margin-top: 3em;
  padding: 2em;
  background-color: transparent;
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  text-transform: uppercase;
  font-size: clamp(0.7rem, 10vw, 0.9rem);
  font-weight: 300;
  max-width: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
  }
`;

//info section
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #141414;
    font-size: 1.3rem;
  }

  div:last-child {
    margin-top: 5em;
  }
`;

export const SecondaryLink = styled.div`
  a {
    font-size: 0.9rem;
  }
`;

//newsletter section
export const NewsLettersSection = styled.div`
  display: none;
  width: 100%;

  h4 {
    font-weight: 400;
  }

  img {
    width: 50px;
  }

  form {
    margin-top: 3.5em;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

//Other section

export const OtherSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Icon = styled.a`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 3.5rem;
    transform: rotate(-90deg);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;

//
// Social
//
export const Social = styled.div`
  display: flex;
  img {
    width: 24px;
  }

  img:hover {
    cursor: pointer;
  }

  img + img {
    margin-left: 0.5em;
  }
`;

//Policy Section

export const PolicySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin-top: 0.4em;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #141414;
    font-size: 1.3rem;
  }
`;
