import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goBack } from "../router/goToPages";

const TripsDetailsPage = () => {
  const history = useHistory();

  return (
    <div>
      <p>Pagina de detalhes da viagem selecionada</p>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={() => goBack(history)}>Voltar</button>
    </div>
  );
};

export default TripsDetailsPage;
