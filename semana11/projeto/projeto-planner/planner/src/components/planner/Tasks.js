import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAxiosConf } from "../../axios/Axiosconf";

const Main = styled.main`
  font-family: "Galada";
  font-size: 4vh;
  display: flex;
  justify-content: space-around;
`;

const List = styled.p`
  font-family: "Vidaloka";
  font-size: 4vh;
`;

const Botao = styled.button`
  border-radius: 2vh;
  border-color: violet;
  color: purple;
  background-color: white;
  margin-left: 3vw;
  display: flex;
  jus
`;

export default function Tasks(props) {
  const { putEdit, deletTask } = useAxiosConf();

  const delet = (id) => {
    deletTask(id);
  };

  const edit = (id) => {
    putEdit(id);
  };

  return (
    <Main>
      <div>
        <div>Segunda</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Segunda" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  <Botao onClick={() => delet(list.id)}>Deletar</Botao>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Terça</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Terça" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  <Botao onClick={() => delet(list.id)}>Deletar</Botao>
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Quarta</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Quarta" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  {<Botao onClick={() => delet(list.id)}>Deletar</Botao>}
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Quinta</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Quinta" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  {<Botao onClick={() => delet(list.id)}>Deletar</Botao>}
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Sexta</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Sexta" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  {<Botao onClick={() => delet(list.id)}>Deletar</Botao>}
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Sábado</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Sábado" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  {<Botao onClick={() => delet(list.id)}>Deletar</Botao>}
                </div>
              )}
            </>
          );
        })}
      </div>

      <div>
        <div>Domingo</div>

        {props.tasks.map((list) => {
          return (
            <>
              {list.day === "Domingo" && (
                <div key={list.id} id={list.id}>
                  <List>{list.text}</List>
                  {<Botao onClick={() => delet(list.id)}>Deletar</Botao>}
                </div>
              )}
            </>
          );
        })}
      </div>
    </Main>
  );
}
