import React from "react";
import styled from "styled-components";
import ListaUsuarios from "./components/ListaUsuarios";
import CadastroUsuario from "./components/CadastroUsuario";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const botao = styled.button`
  border: 3px;
  background-color: gray;
  border-radius: 3vh;
  margin-left: 5px;
`;

class App extends React.Component {
  state = {
    paginaAtual: "cadastroUsuario"
  };

  changePage = () => {
    this.state.paginaAtual === "cadastroUsuario"
      ? this.setState({ paginaAtual: "listaUsuarios" })
      : this.setState({ paginaAtual: "cadastroUsuario" });
  };

  render() {
    const paginaAtual = () => {
      if (this.state.paginaAtual === "cadastroUsuario") {
        return <CadastroUsuario />;
      } else if (this.state.paginaAtual === "listaUsuarios") {
        return <ListaUsuarios />;
      }
    };

    return (
      <AppContainer>
        {paginaAtual()}
        <botao onClick={this.changePage}>Trocar de página</botao>
      </AppContainer>
    );
  }
}

export default App;