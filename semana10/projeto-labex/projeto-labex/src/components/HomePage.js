import React from "react";
/*import {
  goToLoginPage,
  goToApplicationFormPage,
  goToListTripsPage
} from "../router/goToPages";*/
import styled from "styled-components";
import Background from "./imgs/background.jpg";

const Body = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomePage = () => {
  return (
    <Body>
      <p>aloo</p>
    </Body>
  );
};

export default HomePage;
