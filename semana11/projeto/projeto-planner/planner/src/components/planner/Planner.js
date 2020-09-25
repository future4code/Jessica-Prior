import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "../../styles.css";
import { useForm } from "../../hooks/Hook";
import Tasks from "../planner/Tasks";
import styled from "styled-components";

const Botao = styled.button`
  border-radius: 2vh;
  border-color: violet;
  color: purple;
  background-color: white;
  margin-left: 3vw;
`;

const Title = styled.h2`
  font-family: "Bungee Shade";
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  margin-bottom: 3vh;
`;

const Input = styled.input`
  margin-right: 2vw;
`;

export default function Planner(props) {
  const { form, onChange, resetState } = useForm({
    text: "",
    day: ""
  });

  const postTasks = () => {
    const body = {
      text: form.text,
      day: form.day
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior",
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const handleSubimission = (event) => {
    event.preventDefault();
    postTasks();

    resetState();
  };
  useEffect(() => {
    props.getTasks();
  });

  return (
    <main className="App">
      <Title>Todas as tarefas</Title>

      <Form onSubmit={handleSubimission}>
        <Input
          name="text"
          value={form.text}
          onChange={handleInputChange}
          type="text"
          placeholder="Digite sua task"
        />
        <select
          data-testid={"select-day"}
          name="day"
          value={form.day}
          onChange={handleInputChange}
        >
          <option value="none">Selecione um dia da semana</option>
          <option value="Segunda">Segunda</option>
          <option value="Terça">Terça</option>
          <option value="Quarta">Quarta</option>
          <option value="Quinta">Quinta</option>
          <option value="Sexta">Sexta</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
        <Botao>Criar Task</Botao>
      </Form>

      <Tasks tasks={props.tasks} putEdit={props.putEdit} />
    </main>
  );
}
