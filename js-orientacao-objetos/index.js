import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//ByteBank

const banco = "ByteBank";

//Criação de clientes
console.log("\nLista de Clientes\n");
const cliente1 = new Cliente("Rafael Bressan", 12881777716, 2213192);
console.log(cliente1, "\n");
const cliente2 = new Cliente("Luisa Bressan", 12881778798, 2213990);
console.log(cliente2, "\n");

//Criar contas correntes
const conta1 = new ContaCorrente(cliente1, 1);
const conta2 = new ContaCorrente(cliente2, 2);

console.log(conta1);
console.log(conta2);

//Operações
// console.log("\nOperações nas contas do", banco, "\n");
// console.log("Saldo de", conta1.cliente.nome, ": R$", conta1._saldo, "\n");

// conta1.depositar(100);
// console.log("Saldo de", conta1.cliente.nome, ": R$", conta1._saldo, "\n");

// conta1.sacar(50);
// console.log("Saldo de", conta1.cliente.nome, ": R$", conta1._saldo, "\n");

// conta1.sacar(100);
// console.log("Saldo de", conta1.cliente.nome, ": R$", conta1._saldo, "\n");

// conta1.depositar(-300);
// console.log("Saldo de ", conta1.cliente.nome, ": R$", conta1._saldo, "\n");

// conta1.transferir(20, conta2);
// console.log("Saldo de ", conta1.cliente.nome, ": R$", conta1._saldo, "\n");
// console.log("Saldo de ", conta2.cliente.nome, ": R$", conta2._saldo, "\n");
