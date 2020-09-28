import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goBack } from "../router/goToPages";
import { useForm } from "../hook/useForm";
import baseUrl from "../services/request";
import axios from "axios";

const ApplicationFormPage = () => {
  const history = useHistory();
  const [selectCountry, setSelectCountry] = useState([]);
  const { form, onChange, resetState } = useForm({
    name: "",
    age: 0,
    profission: "",
    applicationText: "",
    country: "",
    trip: ""
  });

  const applyToTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      profission: form.profission,
      applicationText: form.applicationText,
      country: form.country
    };
    axios
      .post(`${baseUrl}/trips/:id/apply`, body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCountry = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((r) => {
        setSelectCountry(r.data);
        console.log(r.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCountry();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmittion = (event) => {
    event.preventDefault();

    applyToTrip();
    resetState();
  };

  return (
    <div>
      <p>Pagina de inscrição para viajar</p>
      <button onClick={() => goToHomePage(history)}>Ir para Home</button>
      <button onClick={() => goBack(history)}>Voltar</button>

      <form onSubmit={handleSubmittion}>
        <p>Formulário de inscrição</p>

        <label>Nome:</label>
        <input
          value={form.name}
          name="nome"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{3,}"
          title="No mínimo 3 letras"
          placeholder="Nome"
          required
        />
        <label>Idade:</label>
        <input
          value={form.age}
          name="idade"
          onChange={handleInputChange}
          min="18"
          type="number"
          placeholder="Idade"
          required
        />
        <label>Profissão:</label>
        <input
          value={form.profission}
          name="profissão"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{10,}"
          title="No mínimo 10 caracteres"
          required
        />
        <label>País:</label>
        <select
          value={form.country}
          name="País"
          onChange={handleInputChange}
          type="text"
          required
        >
          {selectCountry.map((country) => {
            return <option value={country.name}>{country.name}</option>;
          })}
        </select>

        <label>
          Escreva brevemente porque deveria ser escolhido para viagem:
        </label>
        <input
          value={form.applicationText}
          name="texto"
          onChange={handleInputChange}
          type="text"
          pattern="[A-Za-z]{30,}"
          title="No mínimo 30 caracteres"
          placeholder="Texto de inscrição"
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
