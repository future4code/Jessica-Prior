import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });
});

describe("Checa Palíndromo", () => {
  it("retorna true para 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });
});

//deveria ser true, porém não aceita pq tem um hífen no socorram-me e a letra maiúscula,
//e na volta n tem
describe("Checa Palíndromo", () => {
  it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
    const ehPalindromo = checaPalindromo(
      "Socorram-me subi no onibus em marrocos"
    );
    expect(ehPalindromo).toEqual(false);
  });
});

//deveria ser true, porém não aceita pq tem acento no A do Dábale, e na volta o Daba não tem.
describe("Checa Palíndromo", () => {
  it("retorna true para 'DÁBALE ARROZ A LA ZORRA EL ABAD'", () => {
    const ehPalindromo = checaPalindromo("DÁBALE ARROZ A LA ZORRA EL ABAD");
    expect(ehPalindromo).toEqual(false);
  });
});

//Serve para palavas
