"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_js_1 = require("./Pessoa.js");
class Funcionario extends Pessoa_js_1.Pessoa {
    constructor(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia, dataAdmissao, dataDemissao, feedback, senha) {
        super(nome, cpf, rg, dataNascimento, sexo, nomeMae, nomePai, email, cep, endereco, numero, bairro, cidade, estado, telefone, saldo, contaCorrente, agencia);
        this.dataAdmissao = dataAdmissao;
        this.dataDemissao = dataDemissao;
        this.feedback = feedback;
        this.senha = senha;
    }
}
exports.Funcionario = Funcionario;
