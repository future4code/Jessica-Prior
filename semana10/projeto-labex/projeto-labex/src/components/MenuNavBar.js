import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  goToLoginPage,
  goToApplicationFormPage,
  goToListTripsPage
} from "../router/goToPages";
import Logo from "./icons/Logo.png";
import "./styled.css";

const Navegation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 10vh;
  padding: 0 3vw 0 3vw;
  background-color: #8d6ad9;
  background-image: linear-gradient(
    14deg,
    #000 7%,
    #1c1c1c 25%,
    #191970 50%,
    #191970 50%,
    #1c1c1c 100%
  );
`;
const Menu = styled.label`
  margin: 0 1rem;
  position: relative;
  color: #ecebf2;
  padding: 10px;
  font-family: "Bungee Shade";
  font-size: 1.2vw;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border-radius: 10px;
    background-color: #1c1c1c;
    /* transition: 0.7s; */

    transform: scale(1);
  }
`;

const Imagem = styled.img`
  background-color: #000;
  border-radius: 35%;
  box-shadow: 2px 2px 2px black;
  width: 3.5vw;
  margin-top: 0.4vh;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
`;

const MenuNavBar = () => {
  const history = useHistory();

  return (
    <Navegation>
      <Buttons>
        <Imagem src={Logo}></Imagem>
        {/* <Menu onClick={() => goToLoginPage(history)}>Login</Menu>
        <Menu onClick={() => goToApplicationFormPage(history)}>Inscrição</Menu>
        <Menu onClick={() => goToListTripsPage(history)}>Lista de viagens</Menu> */}
      </Buttons>
    </Navegation>
  );
};

export default MenuNavBar;
