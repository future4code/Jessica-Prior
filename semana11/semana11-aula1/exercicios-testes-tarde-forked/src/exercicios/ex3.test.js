import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("retorna true para '[1, 2, 1]'", () => {
    const resultado = checaItensDuplicados([1, 2, 1]);

    expect(resultado).toEqual(true);
  });
});
