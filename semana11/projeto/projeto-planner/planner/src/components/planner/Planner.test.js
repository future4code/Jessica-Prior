import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import axios from "axios";
import Planner from "./Planner";
import userEvent from "@testing-library/user-event";
import Tasks from "../Tasks/Tasks";
import App from "../../App";

axios.get = jest.fn().mockResolvedValue({
  data: []
});
axios.post = jest.fn().mockResolvedValue({});

describe("recebe e cria as tarefas", () => {
  test("renderizando inicial", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          day: "Domingo",
          text: "Final Fantasy"
        }
      ]
    });

    const { findByText } = render(<App />);

    const tasks = await findByText(/Final Fantasy/);

    expect(tasks).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior"
    );
  });

  test("vendo se aparece o input", () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText(/Digite sua task/i);
    expect(input).toBeInTheDocument();
  });

  test("se funciona o input", () => {
    const { getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText(/Digite sua task/i);

    fireEvent.change(input, { target: { value: "algo escrito" } });
    expect(input).toHaveValue("algo escrito");
  });

  test("vendo se aparece o select", () => {
    const { getByTestId } = render(<App />);
    const select = getByTestId("selecionar o dia");
    expect(select).toBeInTheDocument();
  });

  test("se o select funciona", () => {
    const { getByTestId } = render(<App />);

    const select = getByTestId("selecionar o dia");
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: "Domingo" } });
    expect(select).toHaveValue("Domingo");
  });

  test("se cria uma tarefa", async () => {
    axios.post = jest.fn().mockResolvedValue();
    axios.get = jest.fn().mockResolvedValue({
      data: []
    });
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

    const input = getByPlaceholderText(/Digite sua task/i);

    const select = getByTestId("selecionar o dia");

    const button = getByText(/Criar task/i);

    fireEvent.change(input, { target: { value: "Jescka" } });
    fireEvent.change(select, { target: { value: "Sexta" } });

    await userEvent.type(input, "Jescka");
    await userEvent.type(select, "Sexta");

    userEvent.click(button);

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior",
      {
        text: "Jescka",
        day: "Sexta"
      }
    );
    wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
  });
});

describe("Lista de tarefas", () => {
  test("Se o botão de deletar aparece na tela", () => {
    const { getByText } = render(<App />);

    const button = getByText(/Deletar/i);
    expect(button).toBeInTheDocument();
  });
});

describe("lista", () => {
  test("renderização inicial", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          day: "Quarta",
          text: "Anitta"
        }
      ]
    });

    const { findByText } = render(<Tasks />);
    const tasks = await findByText(/Anitta/);
    expect(tasks).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior"
    );
  });

  test("testando o botao delete", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: "24",
          day: "Sabado",
          text: "Jescka"
        }
      ]
    });
    axios.put = jest.fn().mockResolvedValue();
    const { findByText } = render(<Tasks />);

    const FinalFantasy = await findByText(/Jescka/);
    expect(FinalFantasy).toBeInTheDocument();

    expect(axios.get).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior"
    );

    userEvent.click(FinalFantasy);
    expect(axios.put).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-jessica-prior/21",
      {
        text: "Jescka"
      }
    );
  });
});
