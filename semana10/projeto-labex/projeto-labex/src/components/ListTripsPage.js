import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goBack, goToTripDetailsPage } from "../router/goToPages";

const ListTripsPage = () => {
  const history = useHistory();

  return (
    <div>
      <p>Pagina de lista de viagens disponiveis</p>
      <button onClick={() => goToTripDetailsPage(history)}>
        Detalhes da viagem
      </button>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={() => goBack(history)}>Voltar</button>
    </div>
  );
};

export default ListTripsPage;
