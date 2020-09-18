import React from "react";
import "./App.css";
import Router from "./router/Router";
import MenuNavBar from "./components/MenuNavBar";
import Footer from "./components/Footer";
import styled from "styled-components";

const Body = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const Div1 = styled.div`
  height: 10%;
  width: 100%;
`;

const Div2 = styled.div`
  height: 100%;
  width: 100%;
`;

const Div3 = styled.div`
  height: 5%;
  width: 100%;
`;

export default function App() {
  return (
    <Body>
      <Div1>
        <MenuNavBar />
      </Div1>
      <Div2>
        <Router />
      </Div2>
      <Div3>
        <Footer />
      </Div3>
    </Body>
  );
}
