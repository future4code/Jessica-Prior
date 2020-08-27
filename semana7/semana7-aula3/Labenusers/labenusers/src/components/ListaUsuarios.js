import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constants/axios";

const DeleteButton = styled.span`
  color: red;
`;

class ListaUsuarios extends React.Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = async () => {

        try {
        const resposta = await axios.get(baseUrl, axiosConfig);

        this.setState({ users: resposta.data });
        } catch (error) {
        console.log(error.message);
        }
    };

    deleteUser = (userId) => {
        axios
          .delete(`${baseUrl}/${userId}`, axiosConfig)
          .then((resposta) => {
            this.getUsers();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      render() {
        return (
          <div>
            {this.state.users.map((user) => {
              return (
                <p key={user.id}>
                  {user.name}
                  <DeleteButton onClick={() => this.deleteUser(user.id)}>
                    {" "}
                    X
                  </DeleteButton>
                </p>
              );
            })}
          </div>
        );
      }
}

export default ListaUsuarios;