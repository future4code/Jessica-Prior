import React from "react";
import styled from "styled-components";
import "/src/styles.css";
import axios from "axios";
import { baseUrl, axiosConfig } from "/src/constants/axios";

const DeleteButton = styled.span`
  color: blueviolet;
`;

class ListarPlaylists extends React.Component {
  state = {
    array: []
  };

  getPlaylist = async () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ array: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePlaylist = (playlistId) => {
    axios
      .delete(`${baseUrl}/${playlistId}`, axiosConfig)
      .then((response) => {
        this.getPlaylist();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getPlaylist();
  }

  render() {
    return (
      <div>
        <h1>Minhas Playlists</h1>
        {this.state.array.map((item) => {
          return(
            <p key={item.id}>
              {item.name}
              <DeleteButton onClick={() => this.deletePlaylist(item.id)}>
                {""}
                X
              </DeleteButton>
          </p>
          );
        })}
      </div>
    );
  }
}

export default ListarPlaylists;
