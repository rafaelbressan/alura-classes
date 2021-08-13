import { Cliente } from "./Cliente.js";

//Conta Corrente
export class ContaCorrente {
  static numeroDeContas = 0;
  conta;

  //Não tenho ideia do pq não funciona
  // set conta(valorConta) {
  //   if (Number.isInteger(valorConta)) {
  //     this._conta = valorConta;
  //   }
  // }

  // get conta() {
  //   return this._conta;
  // }

  _cliente;
  //Acessores de atribuir ou alterar um valor a uma variável (pode definir regras para alterar uma variável de classe)
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  //Acessor para acessar esta variável (senão ela aparece undefined ou erro)
  get cliente() {
    return this._cliente;
  }

  _saldo = 0;
  get saldo() {
    return this._saldo;
  }

  constructor(cliente, conta) {
    this.cliente = cliente;
    this.conta = conta;
    ContaCorrente.numeroDeContas += 1;
  }

  //Método de saque de uma conta corrente
  sacar(valor) {
    console.log("Saque de R$", valor, "da conta de", this.cliente.nome, "\n");
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    } else {
      console.log("Saldo insuficiente para saque.\n");
    }
  }

  //Método de depositar
  depositar(valor) {
    console.log(
      "Depósito de R$",
      valor,
      "na conta de",
      this.cliente.nome,
      "\n"
    );

    if (valor >= 0) {
      this._saldo += valor;
      return valor;
    } else {
      console.log("Depósito inválido.\n");
    }
  }

  //Método de transferir
  transferir(valor, conta) {
    console.log(
      "Transferência de R$",
      valor,
      "de",
      this.cliente.nome,
      "para",
      conta.cliente.nome,
      "\n"
    );
    this.sacar(valor);
    conta.depositar(valor);
  }
}
