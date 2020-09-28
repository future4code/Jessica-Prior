import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

const post = () => {
    return(
        <Post />
    )
}

test("Ao digitar em novo post e clicar em adicionar, deve aparecer um novo post na tela", async () => {
   
    const { getByPlaceholderText, getByText } = render(<App />);
  
    const botaoPost = getByPlaceholderText(/novo post/i);

    fireEvent.change(inputPlaceholderText, {target: {value: "test"}});
    
    expect(inputPlaceholderText).toEqual("test");

    const botaoAdicionar = getByText(/adicionar/i);
 
    fireEvent.click(botaoAdicionar);

    const novoPost = getByText(post)
  
    expect(botaoAdicionar).toContainElement(novoPost);
});


