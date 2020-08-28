import React from "react";
import axios from "axios";
import "/src/styles.css";
import styled from "styled-components";

const Button = styled.button`
  background: ${"white"};
  color: ${"palevioletred"};
  font-size: 12px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const H2 = styled.h2`
  font-size: 20px;
  color: ${"palevioletred"};
`;

const Input = styled.input`
  padding: 3px;
  border-radius: 3px;
  border: 2px solid ${"palevioletred"};
`;

export default class CriarPlaylist extends React.Component {
  state = {
    playlists: [],
    nomePlaylist: ""
  };

  createPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "jessica-prior-jackson"
        }
      }
    );

    request
      .then((response) => {
        alert(`A playlist ${this.state.nomePlaylist} foi criada com sucesso!!`);
        this.getPlaylists();
        this.setState({ nomePlaylist: "" });
      })
      .catch((error) => {
        console.log("Erro");
      });
  };

  render() {
    const onChangeInput = (e) => {
      this.setState({ nomePlaylist: e.target.value });
    };

    return (
      <div className="App">
        <H2>CRIE UMA PLAYLIST!</H2>
        <Input
          value={this.state.nomePlaylist}
          onChange={onChangeInput}
          placeholder="Nome da playlist"
        />
        <Button onClick={this.createPlaylist}>Criar</Button>
      </div>
    );
  }
}

