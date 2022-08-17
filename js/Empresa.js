"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
const Pessoa_js_1 = require("./Pessoa.js");
class Empresa extends Pessoa_js_1.Pessoa {
    constructor(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia, razaoSocial, cnpj, inscricaoEstadual, dataDeAbertura, senha) {
        super(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
        this.dataDeAbertura = dataDeAbertura;
        this.senha = senha;
    }
}
exports.Empresa = Empresa;
