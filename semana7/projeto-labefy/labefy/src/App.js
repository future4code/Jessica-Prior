import React from "react";
import styled from "styled-components";
import "/src/styles.css";
import ListarPlaylists from "./components/ListarPlaylists";
import CriarPlaylist from "./components/CriarPlaylist";

const Button = styled.button`
  background: ${"white"};
  color: ${"palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "CriarPlaylist"
  };

  changePage = () => {
    this.state.currentPage === "CriarPlaylist"
      ? this.setState({ currentPage: "ListarPlaylists" })
      : this.setState({ currentPage: "CriarPlaylist" });
  };

  render() {
    const currentPage = () => {
      if (this.state.currentPage === "CriarPlaylist") {
        return <CriarPlaylist />;
      } else if (this.state.currentPage === "ListarPlaylists") {
        return <ListarPlaylists />;
      }
    };

    return (
      <AppContainer>
        {currentPage()}
        <Button onClick={this.changePage}>Trocar de página</Button>
      </AppContainer>
    );
  }
}

export default App;
