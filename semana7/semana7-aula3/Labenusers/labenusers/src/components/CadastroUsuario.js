import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/axios";

const botao = styled.button`
  border: 3px;
  background-color: gray;
  border-radius: 3vh;
  margin-left: 5px;
`;

class CadastroUsuario extends React.Component {
    state = {
      nameValor: "",
      emailValor: ""
    };

    onChangeName = (event) => {
        this.setState({ nameValor: event.target.value });
      };
    
      onChangeEmail = (event) => {
        this.setState({ emailValor: event.target.value });
      };

      cadastrarUsuario = () => {
        const body = {
          name: this.state.nameValor,
          email: this.state.emailValor
        };
    
        axios
          .post(baseUrl, body, axiosConfig)
          .then((resposta) => {
            console.log(resposta);
            this.setState({ name: "", email: "" });
          })
          .catch((error) => {
            alert(error.message);
          });
      };

      render() {
        return (
          <div>
            <input
              value={this.state.nameValor}
              onChange={this.onChangeName}
              placeholder="nome"
            />
            <input
              value={this.state.emailValor}
              onChange={this.onChangeEmail}
              placeholder="email"
            />
            <botao onClick={this.cadastrarUsuario}>Criar usuário</botao>
          </div>
        );
      }
}

export default CadastroUsuario;