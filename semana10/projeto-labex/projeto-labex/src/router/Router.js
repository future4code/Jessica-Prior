import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListTripsPage from "../components/ListTripsPage";
import HomePage from "../components/HomePage";
import TripDetailsPage from "../components/TripDetailsPage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import CreateTripPage from "../components/CreateTripPage";
import LoginPage from "../components/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/listaDeViagens/:id">
          <ListTripsPage />
        </Route>
        <Route exact path="/inscrição/:id">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/criarViagem/:id">
          <CreateTripPage />
        </Route>
        <Route exact path="/login/:id">
          <LoginPage />
        </Route>
        <Route exact path="/detalhesDaViagem/:id">
          <TripDetailsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <div>Não foi possivel encontrar a pagina (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
