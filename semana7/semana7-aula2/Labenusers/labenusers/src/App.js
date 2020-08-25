import React from 'react';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    nome: "",
    email: "",
    listaUsers: []
  };

  criarUsuario = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "jessica-prior-jackson"
        }
      }
    )
  }

  request
    .then((resposta) => {
      console.log(resposta.data)
      this.setState({nome: resposta.data})
    })
    .catch((error) => {
      alert("not found")
    })



    render() {
      const onChangeInput = (evento) => {
        this.setState({ name: evento.target.value });
      };
      const onChangeInput = (evento) => {
        this.setState({ email: evento.target.value });
      };
  
      return (
        <div className="App">
          <label>Nome:</label>
          <input value={this.state.name} onChange={onChangeInput} />
          <label>Email:</label>
          <input value={this.state.email} onChange={onChangeInput} />
          <button onClick={this.criarUsuario}>Salvar</button>
          {this.state.listaUsers.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </div>
      )
    }
}
