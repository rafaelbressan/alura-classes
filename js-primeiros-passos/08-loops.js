console.log("\nTrabalhando com Condicionais\n");

//Destinos
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
let destinoExiste = false;

//Comprador
const idadeDoComprador = 19;
const estaAcompanhada = false;

//Se comprador é maior de 18 ou é acompanhado
const podeComprar = idadeDoComprador >= 18 || estaAcompanhada == true;

//Passagem
let passagemComprada = false;

//Destino
const destino = "Rio de Janeiro";

//Contador de destinos
let contador = 0;

//O destino que você quer ir existe na nossa lista de destinos?
console.log("Destinos Possíveis\n");

// while (contador < listaDeDestinos.length) {
//   if (listaDeDestinos[contador] == destino) {
//     console.log("Destino existe: ", destino);
//     destinoExiste = true;
//     break;
//   } else {
//     console.log("Procurando destino...\n");
//   }
//   contador += 1;
// }

for (let cont = 0; cont < 3; cont++) {
  if (listaDeDestinos[cont] == destino) {
    console.log("Destino existe: ", destino);
    destinoExiste = true;
  } else {
    console.log("Procurando destino...\n");
  }
}

//Você pode comprar a passagem?
console.log("\nCompra de passagem:");
if (podeComprar && destinoExiste) {
  console.log("Passagem para " + destino + " comprada.\n");
} else {
  console.log(
    "Você não pode comprar esta passagem. Você tem menos de 18 ou não está acompanhado.\n"
  );
}

// //Embarque
// console.log("\nEmbarque:");
// if (
//   (idadeDoComprador >= 18 && passagemComprada) ||
//   (estaAcompanhada && passagemComprada)
// ) {
//   console.log("\nBoa viagem, pode embarcar.\n");
// } else {
//   console.log("\nDesculpe, mas você não pode embarcar\n");
// }
