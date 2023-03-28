const numeros = [1, 2, 3, 4, 5];
const transQuad = (numeros) => {
  return (quadrados = numeros.map((number) => number * number));
};
const somaItens = (numeros) => {
  return numeros.reduce((acumulador, numero) => acumulador + numero);
};

const filtraItens = (numeros) => {
  return numeros.filter((numero) => {
    if (numero % 2 === 0) {
      return numero;
    }
  });
};

const media = (arr) => {
  return somaItens(arr) / arr.length;
};

console.log("Quadrados:", transQuad(numeros));
console.log("somaNumeros:", somaItens(numeros));
console.log("Pares:", filtraItens(numeros));
const quadFil = transQuad(filtraItens(numeros));
console.log("Quadrados filtrados: ", quadFil);
console.log("Media Quadrados: ", media(quadFil));
const pessoas = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 30 },
];
const propriedades = (arr) => {
  const nomes = arr.map(pessoa => pessoa.nome);
  const idades = arr.map(pessoa => pessoa.idade);
  console.log("Nomes:", nomes);
  console.log("Idades:", idades);
};
propriedades(pessoas);

const palavras = ["olá", "mundo", "!"];

const comprimentos = (arr) => {
  const comprimentos = arr.map(str => str.length)
  console.log("comprimentos:",comprimentos);
}
comprimentos(palavras);