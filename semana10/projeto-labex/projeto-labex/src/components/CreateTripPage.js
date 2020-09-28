import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../router/goToPages";
import { useProtectPage } from "../hook/useProtectPage";
import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-jackson/trips";

const CreateTripPage = () => {
  const history = useHistory();
  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();

    console.log(form);
    resetState();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getCreateTripPage();
    } else {
      history.push("/login");
    }
  }, [history]);

  const getCreateTripPage = () => {
    axios
      .get(`${baseUrl}/trips/`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useProtectPage(getCreateTripPage);

  return (
    <div>
      <p>Criação de viagens</p>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>

      <form onSubmit={handleSubmittion}>
        <p>Formulário para criar uma nova viagem</p>
        <label>Nome:</label>
        <input
          value={form.name}
          name="Nome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{5,}"
          title="No mínimo 5 letras"
          required
        />
        <label>Planeta:</label>
        <select>
          <option
            value={form.planet}
            name="Planeta"
            onChange={handleInputChange}
            type="text"
            required
          />
        </select>
        <label>Data:</label>
        <input
          value={form.data}
          name="data"
          onChange={handleInputChange}
          type="date"
          required
        />
        <label>Duração em dias:</label>
        <input
          value={form.durationInDays}
          name="duraçao"
          onChange={handleInputChange}
          type="number"
          required
        />
        <label>Descrição:</label>
        <input
          value={form.description}
          name="descriçao"
          onChange={handleInputChange}
          type="text"
          required
        />
        <button>Criar viagem</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
