import React from 'react';
import './App.css';
import axios from 'axios';




export class listaUsers extends React.Component {
    
  
    render() {
      return (
        <ListaUsuarios>
          <h2>Usuários Cadastrados:</h2>
          {this.props.users.map(user => (
            <ListaUsuariosItens key={user.id}>
              {user.name}{" "}
              <delete onClick={() => this.props.onDeleteUser(user.id)}>
                °
              </delete>
            </ListaUsuariosItens>
          ))}
        </ListaUsuarios>
      );
    }
  }