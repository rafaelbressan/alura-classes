//Classe de clientes
export class Cliente {
  nome;

  _rg;
  get rg() {
    return this._rg;
  }

  _cpf;
  get cpf() {
    return this._cpf;
  }

  constructor(nome, cpf, rg) {
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
  }
}
