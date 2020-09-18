import React from "react";
import IconF from "./icons/icon-facebook.png";
import IconI from "./icons/icon-instagram.png";
import IconT from "./icons/icon-twitter.png";
import styled from "styled-components";
import "./styled.css";

const Container = styled.div`
  height: 80%
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #black;
  background-image: linear-gradient(14deg, #000 17%, #1C1C1C 35%, #191970 50%, #191970 50%, #1C1C1C 100%);
`;

const MainTitle = styled.div`
  text-align: center;
`;

const TitleH3 = styled.h3`
  font-family: "Merienda";
  font-size: 1.2vw;
  margin: 0;
  padding: 0.3vh 0px;
`;

const Social = styled.img`
  width: 2vw;
  margin-left: 1vw;
`;

const Footer = () => {
  return (
    <Container>
      <MainTitle>
        <TitleH3>Redes Sociais</TitleH3>
        <a href="https://pt-br.facebook.com/">
          <Social src={IconF} />
        </a>
        <a href="https://www.instagram.com/">
          <Social src={IconI} />
        </a>
        <a href="https://twitter.com/">
          <Social src={IconT} />
        </a>
      </MainTitle>
    </Container>
  );
};

export default Footer;
