import React from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";

const nomePokemon = styled.span`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const select = styled.select`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const page = styled.div`
  display: grid;
  grid-column: 1fr;
  grid-row: 1fr 1fr 1fr;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    listPokemons: [],
    namePokemon: [],
    imgPokemon: ""
  };

  getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        this.setState({ listPokemons: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getDataPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((response) => {
        this.setState({ imgPokemon: response.data.sprites.front_default });
        this.setState({ namePokemon: response.data.name });
        this.setState({ tipoPokemon: response.data.type.types });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  selectPokemon = (e) => {
    const nomePokemon = e.target.value;
    this.getDataPokemon(nomePokemon);
  };

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    return (
      <page className="App">
        {this.state.imgPokemon && (
          <img alt={"Imagem"} src={this.state.imgPokemon} />
        )}
        <nomePokemon>{this.state.namePokemon}</nomePokemon>
        <select onChange={this.selectPokemon}>
          <option value={""}></option>
          {this.state.listPokemons.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            );
          })}
        </select>
      </page>
    );
  }
}
