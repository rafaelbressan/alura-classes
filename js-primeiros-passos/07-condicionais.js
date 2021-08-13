console.log("\nTrabalhando com Condicionais\n");

//Destinos
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log("Destinos Possíveis");
console.log(listaDeDestinos);

//Comprador
const idadeDoComprador = 9;
const estaAcompanhada = true;

//Passagem
const passagemComprada = true;

// //Se comprador é maior de 18
// if (idadeDoComprador >= 18) {
//   console.log("\nComprador maior de idade.");
//   listaDeDestinos.splice(1, 1);
//   console.log(listaDeDestinos);
// } else if (estaAcompanhada == true) {
//   console.log("\nComprador acompanhado.");
//   listaDeDestinos.splice(1, 1);
//   console.log(listaDeDestinos);
// } else {
//   console.log("\nComprador menor de idade e não acompanhado.\nNão vender.\n");
// }

//Se comprador é maior de 18
if (idadeDoComprador >= 18 || estaAcompanhada == true) {
  console.log("\nComprador maior de idade ou acompanhado.");
  listaDeDestinos.splice(1, 1);
  console.log(listaDeDestinos);
} else {
  console.log("\nComprador menor de idade ou não acompanhado.\nNão vender.");
}

//Embarque
console.log("\nEmbarque:");
if (
  (idadeDoComprador >= 18 && passagemComprada) ||
  (estaAcompanhada && passagemComprada)
) {
  console.log("\nBoa viagem, pode embarcar.\n");
} else {
  console.log("\nDesculpe, mas você não pode embarcar\n");
}
