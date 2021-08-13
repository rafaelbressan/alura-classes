console.log("Trabalahdno com Listas");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);

listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos[listaDeDestinos.length - 1]);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
