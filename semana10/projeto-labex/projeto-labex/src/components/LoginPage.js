import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goBack, goToCreateTripPage } from "../router/goToPages";
import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-jeckason/login";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/criarViagem");
    }
  }, [history]);

  const emailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const passwordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const tokenLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/criarViagem");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Login = () => {
    goToCreateTripPage(history);
    tokenLogin();
  };

  return (
    <div>
      <p>Pagina de login</p>

      <div>
        <p>Preencha os campos para fazer login</p>
        <label>Email:</label>
        <input value={emailValue} onChange={emailChange} />
        <label>Senha:</label>
        <input value={passwordValue} onChange={passwordChange} />
        <button onClick={Login}>Logar</button>
        <button onClick={() => goToHomePage(history)}>Ir para Home</button>
        <button onClick={() => goBack(history)}>Voltar</button>
      </div>
    </div>
  );
};

export default LoginPage;
